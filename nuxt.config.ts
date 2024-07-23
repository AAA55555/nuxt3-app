import { defineNuxtConfig } from "nuxt/config";
import nuxtConfig from "./src/app/configs/nuxt";

const { ENV_MODE } = process.env;

export default defineNuxtConfig({
  devtools: { enabled: ENV_MODE !== "production" },

  srcDir: "src",

  dir: {
    layouts: "shared/ui/layouts",
    public: "../public",
  },

  imports: {
    dirs: ["src/shared/composables", "src/shared/utils"],
  },

  components: {
    dirs: ["shared", "entities", "features", "widgets", "views"],
  },

  // eslint, modules, typescript
  ...nuxtConfig,
});
