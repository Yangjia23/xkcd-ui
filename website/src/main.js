import { createApp } from 'vue'
// import GtUI from '../../dist/gtui.es'
import GtButton from '../../dist/button'
import '../../dist/theme/index.scss'
import App from './App.vue'

createApp(App).use(GtButton).mount('#app')
