import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // Phaser's browser distribution is intentionally monolithic. Keep it in a
    // stable vendor chunk so application code can be cached independently.
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ["phaser"]
        }
      }
    },
    // The Phaser vendor chunk is larger than Vite's generic application
    // default; this threshold documents that intentional dependency boundary.
    chunkSizeWarningLimit: 1800
  }
});
