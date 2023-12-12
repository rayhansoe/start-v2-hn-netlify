import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  plugin: [],
  start: {
    server: {
      preset: "vercel_edge"
    }
  }
});
