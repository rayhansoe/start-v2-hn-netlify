import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      routeRules: {
        '/about': { swr: 120 },
      },
      prerender: {
        routes: ["/about"]
      }
    },
  }
});
