//import prettierConfig from 'eslint-config-prettier'; // Import Prettier config for style consistency

/** @type {import('eslint').Linter.Config[]} */
// Import the ESLint module (only necessary if you want to use ESLint-specific imports or configurations)
// import { eslint } from 'eslint'; // Optional for advanced usage, can be removed if not needed

// Export the ESLint configuration as an array (supports modular configuration)
export default [
  {
    // Specify the files or patterns that ESLint should lint
    files: ['**/*.js'],

    // Language options specify JavaScript version and module type
    languageOptions: {
      globals: {
        window: 'readonly',
        process: 'readonly',
        // Add more globals as needed
      },
      ecmaVersion: 2022, // Set ECMAScript version (e.g., ES2021)
    },

    // Plugins can extend ESLint with custom rules (empty here, can be customized)
    plugins: {},

    // Define custom linting rules
    rules: {
      // Enforce the use of strict equality (`===`) for comparisons
      eqeqeq: 'error',

      // Warn about the use of `console` (often used in debugging, but not in production)
      //'no-console': 'warn',

      // Warn about the use of `debugger` statements
      //'no-debugger': 'warn',

      // Style rules for consistency in formatting
      semi: ['error', 'always'],           // Enforce semicolons at the end of statements
      quotes: ['error', 'single'],         // Enforce single quotes for strings
      indent: ['error', 2],                // Enforce 2-space indentation for better readability
      'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline lists/objects

      // Variables-related rules to ensure code quality
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn about unused vars, ignore those starting with `_`
      'no-undef': 'error',                  // Disallow the use of undeclared variables

      // Code consistency rules
      'prefer-const': 'error',              // Prefer `const` for variables that are not reassigned
      'no-var': 'error',                    // Disallow `var` in favor of `let` and `const`
    },
    //...prettierConfig.rules, // Extend with Prettier's rules to avoid conflicts
  },
];
