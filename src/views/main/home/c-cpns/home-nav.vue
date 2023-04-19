<template>
  <div class="home-nav">
    <div class="list">
      <template v-for="(item, index) in homeNav">
        <div class="item" @click="itemClick(index, item.url)">
          <span class="text" :class="{active: currentItem === index}">{{ item.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import homeNav from '@/assets/data/home-nav.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

let currentItem = ref(1)
function itemClick(index, url) {
  currentItem.value = index
  router.push(url)
}
</script>

<style lang="less" scoped>
.home-nav {
  font-size: 16px;
  line-height: 50px;
  background-color: var(--secondary-bgc);
  border-bottom: 1px solid #7c7c7c;

  .list {
    display: flex;
    .item {
      margin: 0 20px;
      
      .text {
        padding: 1px 13px;
        cursor: pointer;
      }

      .active {
        border-radius: 20px;
        color: #fff;
        background-color: var(--primary-color);
      }
    }
  }
}
</style>