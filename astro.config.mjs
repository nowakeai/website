import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { globalSidebar } from "./src/docs-nav.mjs";

function getAllowedHosts() {
  const mode = process.env.NODE_ENV ?? "development";
  const parentEnv = loadEnv(mode, "..", "");
  const localEnv = loadEnv(mode, process.cwd(), "");
  return (
    process.env.ASTRO_ALLOWED_HOSTS ??
    localEnv.ASTRO_ALLOWED_HOSTS ??
    parentEnv.ASTRO_ALLOWED_HOSTS ??
    ""
  )
    .split(",")
    .map((host) => host.trim())
    .filter(Boolean);
}

const allowedHosts = getAllowedHosts();

export default defineConfig({
  site: "https://nowake.ai",
  output: "static",
  integrations: [
    starlight({
      title: "nowake.ai docs",
      description:
        "Documentation for nowake.ai open-source infrastructure tools, including kube-insight and svc-lb-mux.",
      favicon: "/favicon.svg",
      customCss: ["./src/styles/starlight.css"],
      credits: false,
      disable404Route: true,
      editLink: {
        baseUrl: "https://github.com/nowakeai/website/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nowakeai",
        },
      ],
      pagination: false,
      routeMiddleware: "./src/starlight-route-data.ts",
      sidebar: globalSidebar,
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts,
    },
  },
});
