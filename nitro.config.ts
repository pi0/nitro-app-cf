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
      // These are to be added by Nitro
      name: "worker",
      pages_build_output_dir: "./dist",
      compatibility_date: "2024-04-10",
      compatibility_flags: ["nodejs_compat"],
    },
  },
});
