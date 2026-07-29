// The MCP tool files are bundled into a Deno edge function at build time by
// @lovable.dev/mcp-js. They read secrets from Deno via `process.env` (Deno
// polyfills this), but our Vite tsconfig doesn't include node types — this
// ambient declaration lets the tool files type-check.
declare const process: { env: Record<string, string | undefined> };
