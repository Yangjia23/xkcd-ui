import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Hello from './components/Hello.vue'
import Word from './components/Word.vue'
import './index.css'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Hello},
    {path: '/xxx', component: Word}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
