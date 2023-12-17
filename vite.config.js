import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': {
          cache: { swr: true, maxAge: 60 * 2 }
        },
      },
      prerender: {
        routes: ["/about"]
      }
    },
  }
});
