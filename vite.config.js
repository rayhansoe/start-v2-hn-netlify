import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { isr: 15 },
        '/about': { headers: {
          'Cache-Control': 'max-age=15, stale-while-revalidate',
          'CDN-Cache-Control': 'max-age=15, stale-while-revalidate',
          'Vercel-CDN-Cache-Control': 'max-age=15, stale-while-revalidate',
        } },
      }
    },
  }
});
