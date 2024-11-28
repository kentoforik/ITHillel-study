import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
// Import the ESLint module (only necessary if you want to use ESLint-specific imports or configurations)
// import { eslint } from 'eslint'; // Optional for advanced usage, can be removed if not needed

// Export the ESLint configuration as an array (supports modular configuration)
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "prefer-const": "error",
      "no-unused-vars": "warn",
      eqeqeq: "off",
      "no-unused-expressions": "error",
      "no-var": "error",
      "no-undef": "error"
    }
  }
];
