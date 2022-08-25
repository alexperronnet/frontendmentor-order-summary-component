import { defineConfig } from "vite"
import { resolve } from "path"

const root = resolve(__dirname, "src")
const outDir = resolve(__dirname, "dist")

export default defineConfig({
  base: "/frontendmentor-order-summary-component/",
  root,
  build: {
    outDir,
    emptyOutDir: true
  }
})
