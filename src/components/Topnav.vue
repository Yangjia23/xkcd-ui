<template>
  <div class="topNav">
    <div class="topNav-logo">LOGO</div>
    <ul class="topNav-list">
      <li class="topNav-list-item">菜单一</li>
      <li class="topNav-list-item">菜单二</li>
    </ul>
    <span class="asider-toggle" @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  name: 'Topnav',
  props: {
    showToggle: {
      type: Boolean,
      default: false
    }
  },
  setup(props){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log('asiderVisible', asideVisible);
    
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
      console.log('asideVisible', asideVisible.value);
    }
    return {
      showToggleBtn: props.showToggle,
      toggleAside
    }
  }
}
</script>

<style lang="scss">
  .topNav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100vw;
    height: 54px;
    padding: 0 4em;
    background: #f1cb9a;
    position: relative;
    &-list{
      display: flex;
      align-items: center;
      height: 100%;
      &-item{
        cursor: pointer;
        white-space: nowrap;
        width: 4em;
        text-align: center;
      }
    }
    .asider-toggle{
      display: none;
      position: absolute;
      left: 20px;
      width: 20px;
      height: 2px;
      background: fuchsia;
      margin: 8px 0;
      cursor: pointer;
      z-index: 10;
      &::before, &::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background: fuchsia;
        cursor: pointer;
      }
      &::before{
        top: -6px;
      }
      &::after{
        top: 6px;
      }
    }
  }
  @media (max-width: 500px) {
    .topNav{
      justify-content: center;
      &-list{
        display: none;
      }
      .asider-toggle{
        display: inline-block;
      }
    }
  }
</style>