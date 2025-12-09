import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import AntdResolver from "unplugin-auto-import-antd";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],
      imports: ["react"],
      eslintrc: {
        enabled: true,
        filepath: "./.eslint-auto-import.json",
        globalsPropValue: true,
      },
      resolvers: [
        AntdResolver({
          prefix: "Ant",
        })
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src/"),
    },
  },
});
