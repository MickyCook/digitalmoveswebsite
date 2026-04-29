import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about/index.html",
        contact: "contact/index.html",
        contactThanks: "contact/thanks/index.html",
        webPortalDevelopment: "web-portal-development/index.html"
      }
    }
  }
});
