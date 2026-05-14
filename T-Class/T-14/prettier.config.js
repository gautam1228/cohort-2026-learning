//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 4,
  bracketSpacing: true,
  arrowParens: "avoid",

  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
