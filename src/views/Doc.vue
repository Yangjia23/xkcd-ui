<template>
  <main class="doc container">
      <aside class="aside" v-if="asideVisible">
        <h3>组件列表</h3>
        <ol class="aside-submenu">
          <li class="aside-menu">
            <router-link to='/guide/switch'>Switch 组件</router-link>
          </li>
          <li class="aside-menu"><router-link to='/guide/button'>Button 组件</router-link></li>
          <li class="aside-menu"><router-link to='/guide/dialog'>Dialog 组件</router-link></li>
          <li class="aside-menu"> <router-link to='/guide/tabs'>Tabs 组件</router-link></li>
        </ol>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
  </main>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  setup(props) {
    const asideVisible = inject('asideVisible')
    console.log('asideVisible', asideVisible);
    
    return {
      asideVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  overflow: hidden;
  display: flex;
  .aside{
    box-sizing: border-box;
    width: 180px;
    background: rgb(113, 206, 209);
    padding: 16px;
    position: relative;
    &-submenu{
      padding-left: 10px;
    }
    &-menu{
      padding: 4px 0;
      cursor: pointer;
    }
  }
  .content{
    padding: 12px 0 12px 20px;
    flex: 1;
    overflow-y: auto;
    background: rgb(191, 225, 238);
  }
}

@media (max-width: 500px) {
  .container{
    .aside{
      width: 160px;
      position: fixed;
      top: 54px;
      bottom: 0;
    } 
  }
}
</style>