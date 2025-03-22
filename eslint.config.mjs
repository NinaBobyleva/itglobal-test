import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-vars": "error"
    },
  },
];
