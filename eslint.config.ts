import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: "project/typescript-only",
    files: ["**/*.{js,jsx,mjs,cjs}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Program",
          message:
            "Committed JavaScript source is forbidden. Use TypeScript (.ts/.tsx) or Astro.",
        },
      ],
    },
  },
];
