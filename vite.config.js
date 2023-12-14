import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel_edge",
      routeRules: {
        '/**': { swr: 0 }
      },
      prerender: {
        crawlLinks: true
      }
    }
  }
});
