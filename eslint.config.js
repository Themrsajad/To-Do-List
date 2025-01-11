import { ESLint } from "eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import typescript from "@typescript-eslint/eslint-plugin";
import { defineConfig } from "eslint-define-config";

export default defineConfig({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-no-target-blank": "off",
    "react-hooks/rules-of-hooks": "warn",
  },
});
