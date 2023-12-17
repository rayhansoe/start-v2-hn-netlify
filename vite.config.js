import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { prerender: true },
        '/about': { headers: {
          'Cache-Control': 'max-age=age=31536000, immutable',
          'CDN-Cache-Control': 'max-age=age=31536000, immutable',
          'Vercel-CDN-Cache-Control': 'max-age=age=31536000, immutable',
        } },
      }
    },
  }
});
