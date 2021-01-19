<template>
  <div>
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

import {Switch} from '../packages'

export default {
  name: 'SwitchDemo',
  components: {
    Switch
  },
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>