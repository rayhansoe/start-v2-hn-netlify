import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { cache: { isr: true, maxAge: 15 } },
        '/about': { headers: { 'cache-control': 'max-age=15, stale-while-revalidate', } },
      }
    },
  }
});
