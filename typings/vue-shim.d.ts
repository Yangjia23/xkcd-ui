// 默认无法解析 .vue 文件，添加 typings
// vue3 中组件导出都通过 defineComponent 函数进行包裹，
// 所以，vue组件的类型  =>  defineComponent函数的返回类型
// 同时，vue组件注册时，会调用 install 方法, 所以需要添加该类型定义

declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType <typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}