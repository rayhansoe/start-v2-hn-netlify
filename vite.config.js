import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      routeRules: {
        '/about': { isr: true },
      },
      prerender: {
        routes: ["/about"]
      }
    },
  }
});
