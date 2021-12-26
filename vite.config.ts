import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const resolve = (dir:string) => path.join(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":resolve("src"),
      comps: resolve("src/components"),
      apis: resolve("src/apis"),
      views: resolve("src/views"),
      utils: resolve("src/utils"),
      routes: resolve("src/routes"),
      styles: resolve("src/styles"),
      plugins:resolve("src/plugins"),
      page:resolve("src/page")
    }
  }
})
