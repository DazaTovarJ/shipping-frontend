import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  reactHooks.configs.flat.recommended,
  eslintPluginPrettierRecommended
]);