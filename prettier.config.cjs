/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 100,
  arrowParens: "always",

  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
  ],
  pluginSearchDirs: false,

  /** IMPORT SORT OPTIONS */
  importOrder: [
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "^@/(.*)$",
    "^[.]", // relative imports
  ],
  importOrderTypeScriptVersion: "5.1.3",
};
