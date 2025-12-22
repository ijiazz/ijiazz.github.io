import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
const rootDir = import.meta.dirname!;
export default defineConfig({
  plugins: [deno(), react()],

  build: {
    rollupOptions: {
      input: {
        index: path.resolve(rootDir, "index.html"),
        post: path.resolve(rootDir, "post/index.html"),
      },
    },
  },
});
