import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
console.log(process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  root: './website/', // 项目根目录（index.html 文件所在的位置），默认 process.cwd() 为 /Users/yangjay/project/xkcd-ui
  plugins: [vue()],
  server: {
    port: 4000
  }
})
