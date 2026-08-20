import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    name: "project/typescript-only",
    files: ["**/*.{js,jsx,mjs,cjs}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Program",
          message:
            "Committed JavaScript files are forbidden. Migrate this file to TypeScript (.ts/.tsx) or Astro.",
        },
      ],
    },
  },
];
