// Importing necessary ESLint plugins to enforce coding standards and best practices
import importPlugin from 'eslint-plugin-import'; // Validates proper imports and exports in ES6+ modules
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'; // Accessibility rules for JSX elements
import prettierPlugin from 'eslint-plugin-prettier'; // Integrates Prettier for consistent code formatting
import reactPlugin from 'eslint-plugin-react'; // Linting rules specific to React applications
import reactHooksPlugin from 'eslint-plugin-react-hooks'; // Enforces best practices for React Hooks
import reactRefreshPlugin from 'eslint-plugin-react-refresh'; // Supports hot reloading during development

// Plugins configuration object
export default {
  // React-specific linting rules
  react: reactPlugin,

  // Linting rules for React Hooks
  'react-hooks': reactHooksPlugin,

  // Validates ES6+ import/export syntax
  import: importPlugin,

  // Accessibility checks for JSX elements
  'jsx-a11y': jsxA11yPlugin,

  // Integrates Prettier for code formatting
  prettier: prettierPlugin,

  // Enhances development experience with hot reloading
  'react-refresh': reactRefreshPlugin,
};
