module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": "warn",
    "import/extensions": "off",
    "no-tabs": "off",
    indent: ["error", 2],
    "no-fallthrough": "warn",
  },
};
