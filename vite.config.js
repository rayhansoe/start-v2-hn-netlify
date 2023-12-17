import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { swr: 60 },
      },
      prerender: {
        routes: ["/about"]
      }
    },
  }
});
