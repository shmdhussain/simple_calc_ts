import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "simple_calc_ts",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ["es", "cjs"],
    },
    minify: false,
    target: ["es2023"],
    sourcemap: true,
  },
  plugins: [dts({ tsconfigPath: "tsconfig.json" })],
});
