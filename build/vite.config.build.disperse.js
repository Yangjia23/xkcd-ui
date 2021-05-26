import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript from "rollup-plugin-typescript2";
import { getPackagesSync } from '@lerna/project';
const path = require("path");

// 筛选出所有的组件
const inputs = getPackagesSync().map(pkg => pkg.name).filter(name => name.includes('@gt-ui'))

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '../packages') }]
  },
  plugins: [
    vue({
      target: 'browser'
    }),
    {
      ...typescript({
        tsconfigOverride: {
          compilerOptions: { 
            declaration: false // 无需再次生成 ts声明文件
          },
          exclude: ["node_modules"],
        },
      }), // 默认会调用 tsconfig.json, 帮助我们生成声明文件
      apply: "build",
    },
  ],
  build: {
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      // external (id) {
      //   return /^vue/.test(id) || /^@gt-ui/.test(id) // 组件之间相互依赖，也不会进行打包
      // },
      external: ['vue'],
      input: inputs.reduce((backObj, curName) => {
        const pkgName = curName.split('@gt-ui/')[1]
        backObj[pkgName] = path.resolve(__dirname, `../packages/${pkgName}/index.ts`)
        return backObj
      }, {}),
      output: {
        entryFileNames: '[name]/index.js',
        format: 'es',
      },
    },
  },
});
