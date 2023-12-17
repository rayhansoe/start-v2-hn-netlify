import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { isr: true },
        '/about': { headers: {
          'Cache-Control': 'max-age=age=31536, stale-while-revalidate',
          'CDN-Cache-Control': 'max-age=age=31536, stale-while-revalidate',
          'Vercel-CDN-Cache-Control': 'max-age=age=31536, stale-while-revalidate',
        } },
      }
    },
  }
});
