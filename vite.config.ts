import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
  plugins: [
    {
      name: "remove-crossorigin",
      transformIndexHtml(html) {
        return html.replace(/\s*crossorigin\s*/gi, "");
      },
    },
  ],
});
