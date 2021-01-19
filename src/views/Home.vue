<template>
  <main class="page container">
    <h2 class="title">XKCD-UI</h2>
    <p class="description">一款基于 Vue3 + TypeScripe + Vite 搭建的 UI 组件库</p>
    <div class="actions">
      <a class="actions-item" href="">Github</a>
      <router-link class="actions-item" to="/guide">Start</router-link>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'Home',
  setup(props) {
    
  }
}
</script>

<style lang="scss" scoped>
  .container{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      color: #303133;
    }
    .description{
      color: #606266;
      margin: 2em 0;
    }
    .actions{
      display: flex;
      &-item{
        width: 6em;
        border: 1px solid bisque;
        text-align: center;
        height: 36px;
        line-height: 36px;
        border-radius: 18px;
        margin: 0 20px;
        cursor: pointer;
      }
    }
  }
</style>