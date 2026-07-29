// This module runs inside the auto-generated Supabase edge function, where
// Deno provides `process.env`. It is imported by tool files but never runs in
// the browser. The @ts-nocheck lets us reference `process` without pulling
// node types into the Vite tsconfig.
// @ts-nocheck
import { createClient } from "@supabase/supabase-js";
import type { ToolContext } from "@lovable.dev/mcp-js";

export function supabaseForUser(ctx: ToolContext) {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
