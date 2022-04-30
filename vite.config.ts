import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
  },

  plugins: [
    VitePWA({
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "robots.txt",
        "fonts/*.{woff,woff2,otf,eot,svg}",
        "webfonts/*.{woff,woff2,otf,eot,svg}",
      ],
      manifest: {
        name: "Letify",
        short_name: "Letify",
        description: "Financial App",
        theme_color: "#ffffff",
        id: "letify",
        start_url: "/",
        icons: [
          {
            src: "maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "maskable_icon_x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
          },
        ],
      },
    }),
    vue(),
  ],
});
