import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  
  // Root Directory
  {
    files: ["*.config.{js,cjs}", "*.config.js"],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "commonjs"
    }
  },

  // Server 
  {
    files: ["server/**/*.js"],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "commonjs"
    }
  },

  // Client 
  {
    files: ["client/**/*.{js,jsx}"],
    languageOptions: {
      globals: { ...globals.browser },
      sourceType: "module"
    },
    ...pluginReact.configs.flat.recommended
  }
]);
