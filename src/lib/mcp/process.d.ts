// The MCP tool files are bundled into a Deno edge function at build time by
// @lovable.dev/mcp-js. Deno polyfills `process.env` at runtime, but our Vite
// tsconfig doesn't include node types — declare it globally so the tool files
// type-check.
export {};

declare global {
  const process: { env: Record<string, string | undefined> };
}
