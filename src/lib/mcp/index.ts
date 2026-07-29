import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listOrdersTool from "./tools/list-orders";
import listWishlistTool from "./tools/list-wishlist";
import addToWishlistTool from "./tools/add-to-wishlist";
import getWalletBalanceTool from "./tools/get-wallet-balance";
import listWalletTransactionsTool from "./tools/list-wallet-transactions";

// Build the OAuth issuer from the project ref (inlined at build time by Vite),
// never from SUPABASE_URL — the Lovable Cloud proxy URL won't match the issuer
// that Supabase's discovery document publishes, and mcp-js would reject tokens.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "nepges-store-mcp",
  title: "Nepges Store",
  version: "0.1.0",
  instructions:
    "Tools for the Nepges Store. Callers act as the signed-in shopper: view their orders, manage their wishlist, and check their virtual wallet.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    listOrdersTool,
    listWishlistTool,
    addToWishlistTool,
    getWalletBalanceTool,
    listWalletTransactionsTool,
  ],
});
