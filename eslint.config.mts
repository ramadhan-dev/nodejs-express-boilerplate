// eslint.config.mts
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Konfigurasi untuk file JavaScript & TypeScript
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    // Gunakan parser TypeScript
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.node, 
      },
    },

    // Extend dari rule bawaan ESLint + TS
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, 
    ],

    // Tambahkan rules tambahan sesuai preferensi
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
]);
