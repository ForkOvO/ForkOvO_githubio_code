<template>
  <div class="app">
    <Sidebar class="sidebar"/>
    <RouterView/>
    <a href="https://github.com/ForkOvO/ForkDesktop" target="_blank">Github</a>
  </div>
</template>

<script setup lang="ts" name="App">
  import { RouterView } from 'vue-router';
  import Sidebar from '@/components/Sidebar.vue';
</script>

<style scoped>
  .app{
    /* 全屏 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* 渐变背景 */
    background: linear-gradient(to right top, #14D2DA, #F035FC);
  }

  .sidebar{
    position: absolute;
    top: 100;
    left: 0;
    bottom: 0;
    width: 50px;
    background-color: #fff;
  }
</style>
