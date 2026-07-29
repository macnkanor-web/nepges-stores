import { supabaseForUser } from "../supabase-client";
import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_wishlist",
  title: "List my wishlist",
  description: "List all products the signed-in user has saved to their wishlist.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async (_input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const { data, error } = await supabaseForUser(ctx)
      .from("wishlists")
      .select("id, product_handle, product_data, created_at")
      .order("created_at", { ascending: false });
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { items: data ?? [] },
    };
  },
});
