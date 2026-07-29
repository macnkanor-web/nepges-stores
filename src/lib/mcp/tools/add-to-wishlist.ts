import { supabaseForUser } from "../supabase-client";
import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "add_to_wishlist",
  title: "Add to wishlist",
  description: "Save a product (by its store handle) to the signed-in user's wishlist.",
  inputSchema: {
    product_handle: z.string().trim().min(1).describe("The product handle from the Nepges Store."),
  },
  annotations: { readOnlyHint: false, idempotentHint: true, openWorldHint: false },
  handler: async ({ product_handle }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const { data, error } = await supabaseForUser(ctx)
      .from("wishlists")
      .insert({ user_id: ctx.getUserId(), product_handle })
      .select();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: `Added ${product_handle} to wishlist.` }],
      structuredContent: { row: data?.[0] },
    };
  },
});
