<template>
  <div class="app">
    <Sidebar class="sidebar"/>
    <RouterView/>
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
</style>
