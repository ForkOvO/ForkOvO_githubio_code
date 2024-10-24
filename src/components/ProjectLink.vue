<script setup lang="ts">
  let icon = "https://raw.githubusercontent.com/PhoenixOvO03/QtDesktopTools_resource/main/images/icon.png"
  let title = "QtDesktopTools"
  let descript = "桌面小工具"
  let link = "https://github.com/ForkOvO/QtDesktopTools"

  const toLink = () => {
    window.open(link, "_blank")
  }
</script>

<template>
  <div class="container" :onclick="toLink">
    <img class="icon" :src="icon" alt="icon" width="125" height="125"/>
    <h1>{{ title }}</h1>
    <h4>{{ descript }}</h4>
  </div>
</template>

<style scoped>
.icon {
  border: 1px solid #ccc;
  border-radius: 50%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.container:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>