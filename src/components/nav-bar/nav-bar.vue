<template>
  <div class="nav-bar">
    <div class="logo">logo</div>
    <div class="control">
      <div class="list">
        <template v-for="(item, index) in navBar">
          <div class="item" 
            :class="{active: currentItem === index}" 
            @click="itemClick(index, item.url)"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
      <div class="search">
        <input class="input" type="text"  placeholder="请输入您想知道的问题">
        <button class="btn">提问</button>
      </div>
    </div>
    <div class="info">myInfo</div>
  </div>
</template>

<script setup>
import navBar from '@/assets/data/nav-bar.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let currentItem = ref(0)
const router = useRouter()
function itemClick(index, url) {
  currentItem.value= index
  router.push(url)
}
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #7c7c7c;
  font-size: 18px;
  background-color: var(--secondary-bgc);
  overflow: hidden;

  .logo {
    flex: 1;
    background-color: skyblue;
  }

  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
    color: #bbb;

    .list {
      width: 430px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        box-sizing: border-box;
        height: 70px;
        margin: 0 10px;
        line-height: 70px;
        cursor: pointer;
      }

      .active {
        color: #333;
        border-bottom: 7px solid var(--primary-color);
      }
    }

    .search {
      flex: 1;
      display: flex;

      .input {
        width: 400px;
        height: 30px;
        margin: 0 20px;
        padding: 0 10px;
        border-radius: 15px;
        border: 1px solid #7c7c7c;
      }

      .btn {
        padding: 0 10px;
        border-radius: 15px;
        // border: none;
        color: #fff;
        background-color: var(--primary-color);
        // outline: none;
        cursor: pointer;
      }
    }
  }

  .info {
    flex: 1;
    background-color: orange;
  }

  .logo, .control, .info {
    height: 70px;
  }
}
</style>