import { defineNuxtConfig } from "nuxt/config";
import modules from "./modules";
import typescript from "./typescript";
import eslint from "./eslint";

export default defineNuxtConfig({
  modules,
  typescript,
  ...eslint,
});
