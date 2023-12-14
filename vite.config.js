import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
      prerender: {
        crawlLinks: true
      }
    }
  }
});
