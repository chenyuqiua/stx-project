<template>
  <div class="home">
    <div class="main">
      <div class="left">
        <home-nav />
        <router-view></router-view>
      </div>
      <div class="right">
        <right-card />
      </div>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home'
import homeNav from './c-cpns/home-nav.vue'
import rightCard from './c-cpns/right-card.vue'

const useStore = useHomeStore()

// 发送网络请求
useStore.fetchGetAccountInfo()
useStore.fetchGetRecommendData(1)
useStore.fetchGetMatchData()
useStore.fetchGetArticleAllData()
</script>

<style lang="less" scoped>
.home {
  
  .main {
    display: flex;

    .left {
      flex: 1;
      background-color: var(--secondary-bgc);
    }

    .right {
      width: 280px;
      margin-left: 20px;
    }
  }
}
</style>