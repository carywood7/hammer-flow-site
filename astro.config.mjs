import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const siteUrl = "https://hammerflow.carywood.co";

export default defineConfig({
  site: siteUrl,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        return (
          pathname !== "/thank-you/" &&
          !pathname.startsWith("/404")
        );
      },
    }),
  ],
  build: {
    format: "directory",
  },
});
