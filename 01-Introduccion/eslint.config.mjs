import { defineConfig } from "eslint/config";

export default defineConfig([{
    languageOptions: {
        ecmaVersion: 6,
        sourceType: "script",
    },

    rules: {
        semi: ["error", "always"],
    },
}]);