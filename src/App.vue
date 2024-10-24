<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <a href="https://github.com/ForkOvO/QtDesktopTools" target="_blank">
      <img alt="ForkOvO logo" class="logo" src="./assets/icon.png" width="125" height="125" />
    </a>

    <div class="wrapper">
      <HelloWorld msg="ForkOvO" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  border-radius: 50%;
  border: 1px solid #ccc;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
