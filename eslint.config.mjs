import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {ignores: [
    ".config/*",
    "node_modules/",
    "vendor/",
    "build/*.js",
    "config/*.js",
    "coverage/*.js",
    "coverage/*",
    "jest/*.js",
    "__tests__/*",
    "__tests__/*.js"]}
];