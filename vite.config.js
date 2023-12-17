import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { isr: 60 },
      },
      prerender: {
        routes: ["/about"]
      }
    },
  }
});
