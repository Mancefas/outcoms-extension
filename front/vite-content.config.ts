import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    emptyOutDir: false, // So that popup build files don't get deleted
    rollupOptions:{
      input:{
        content: "./src/scripts/contentScript.ts", // Entry Point
        // "content-main": "./scripts/contentScript.ts",
      },
      output:{
        entryFileNames: "assets/contentScript.js"
      }
    },
  },
})