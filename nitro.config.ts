//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  minify: false,
  preset: "cloudflare-pages",
  unenv: {
    external: ["node:async_hooks"],
  },
  cloudflare: {
    wrangler: {
      compatibility_date: "2024-04-10",
      node_compat: true,
      compatibility_flags: ["node_compat"],
    },
  },
});
