<template>
  <div class="main">
    <nav-bar />
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import navBar from '@/components/nav-bar/nav-bar.vue'
</script>

<style lang="less" scoped>
.main {
  background-color: var(--primary-bgc);

  .show {
    width: 1100px;
    margin: 0 auto;
  }
}
</style>