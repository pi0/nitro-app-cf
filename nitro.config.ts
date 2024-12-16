//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  minify: false,
  preset: "cloudflare-pages",
  compatibilityDate: '2024-12-16',
  unenv: {
    external: ["node:async_hooks"],
  },
});
