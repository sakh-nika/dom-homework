import js from "@eslint/js";
import globals from "globals";
import config from "eslint-config-prettier";
import plugin from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  config,
  plugin,
 ]);
