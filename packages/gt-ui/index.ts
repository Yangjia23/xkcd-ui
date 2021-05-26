import { App } from 'vue'
import Button from '@gt-ui/button'

const components = [
  Button,
]

const install = (app: App):void => {
  components.forEach(component => {
    if (component.install){
      app.use(component)
    } else if (component.name) {
      app.component(component.name, component)
    }
  })
}

// createApp().use(gt-ui), 会调用 install
export default {
  install
}