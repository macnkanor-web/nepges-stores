// Shopify Storefront API proxy. Keeps the Storefront access token server-side
// so it can be rotated without a client redeploy and can't be abused directly
// from the browser.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SHOPIFY_API_VERSION = "2025-07";
const SHOPIFY_STORE_PERMANENT_DOMAIN = "dream-web-me-p2viv.myshopify.com";
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const token = Deno.env.get("SHOPIFY_STOREFRONT_ACCESS_TOKEN");
  if (!token) {
    console.error("SHOPIFY_STOREFRONT_ACCESS_TOKEN is not configured");
    return new Response(
      JSON.stringify({ error: "Shopify integration is not configured." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  let payload: { query?: unknown; variables?: unknown };
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (typeof payload.query !== "string" || payload.query.length === 0) {
    return new Response(JSON.stringify({ error: "Missing GraphQL query" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  if (payload.query.length > 10_000) {
    return new Response(JSON.stringify({ error: "Query too large" }), {
      status: 413,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const upstream = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({
      query: payload.query,
      variables: payload.variables ?? {},
    }),
  });

  const body = await upstream.text();
  return new Response(body, {
    status: upstream.status,
    headers: {
      ...corsHeaders,
      "Content-Type":
        upstream.headers.get("Content-Type") ?? "application/json",
    },
  });
});
