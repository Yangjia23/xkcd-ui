import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import typescript from 'rollup-plugin-typescript2';
const path = require('path')

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '../packages') }]
  },
  plugins: [
    vue(),
    {
      ...typescript({
        tsconfigOverride: {
          'include': [
            'packages/**/*',
            'typings/vue-shim.d.ts'
          ],
          'exclude': [
            'node_modules',
            'packages/**/__tests__/*',
            'website'
          ]
        }
      }), // 默认会调用 tsconfig.json, 帮助我们生成声明文件
      apply: 'build'
    }
  ],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, '../packages/gt-ui/index.ts'),
      name: 'gtui',
      formats: ['es', 'umd']
    }
  }
})