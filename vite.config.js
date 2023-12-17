import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { prerender: true },
      },
      prerender: {
        routes: ["/about"]
      }
    },
  }
});
