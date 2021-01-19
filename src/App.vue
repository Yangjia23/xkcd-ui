<template>
  <Topnav />
  <div class="app-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import router from './router'
import Topnav from './components/Topnav.vue'

export default {
  name: 'App',
  components: {
    Topnav
  },
  setup() {
    const isPhone = window.innerWidth < 500
    const defaultValue = isPhone ? false : true
    const asideVisible = ref(defaultValue)
    provide('asideVisible', asideVisible)

    router.afterEach(() => {
      isPhone && (asideVisible.value = false)
    })
  }
}
</script>

<style lang="scss" scoped>
.app-container{
  height: calc(100% - 54px);
}
</style>
