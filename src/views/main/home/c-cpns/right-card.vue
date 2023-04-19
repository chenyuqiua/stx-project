<template>
  <div class="right-card">
    <!-- 创作中心 -->
    <div class="creator-center">
      <div class="title">
        <div class="head">
          <img :src="userInfo.icon" alt="" class="image">
          <div class="name">{{ userInfo.nickName }}</div>
        </div>
        <div class="info">
          <div class="create">创作中心</div>
          <div class="level">LV.2</div>
          <div class="draft">草稿箱(1)</div>
        </div>
      </div>

      <div class="icons">
        <div class="icon_wrapper">
          <div class="item">
            <img src="@/assets/img/home/group_icon1.png" alt="" class="icon">
          </div>
          <div class="text">回答问题</div>
        </div>
        <div class="icon_wrapper">
          <div class="item">
            <img src="@/assets/img/home/group_icon2.png" alt="" class="icon">
          </div>
          <div class="text">书写文章</div>
        </div>
        <div class="icon_wrapper">
          <div class="item">
            <img src="@/assets/img/home/group_icon3.png" alt="" class="icon">
          </div>
          <div class="text">视频答疑</div>
        </div>
        <div class="icon_wrapper">
          <div class="item">
            <img src="@/assets/img/home/group_icon4.png" alt="" class="icon">
          </div>
          <div class="text">积分兑换</div>
        </div>
      </div>

      <div class="data">
        <div class="wrapper read">
          <div class="title">
            <span class="text">今日阅读(播放)数</span>
            <img class="image" src="@/assets/img/home/tip.png" alt="">
          </div>
          <div class="count">0</div>
          <div class="yesterday">昨日数据0</div>
        </div>
        <div class="wrapper agree">
          <div class="title">
            <span class="text">今日新增赞同数</span>
            <img class="image" src="@/assets/img/home/tip.png" alt="">
          </div>
          <div class="count">0</div>
          <div class="yesterday">昨日数据0</div>
        </div>
      </div>

      <div class="outin_btn">
        <div class="span">进入创作者中心</div>
        <img class="icon" src="@/assets/img/home/right_icon.png" />
      </div>
    </div>

    <!-- 推荐关注 -->
    <div class="recomend">
      <div class="top">
        <img class="icon" src="@/assets/img/login/user_icon.png" alt="">
        <h2 class="title">推荐关注</h2>
      </div>
      <div class="main">
        <template v-for="item in recommend" :key="item.url">
          <div class="item">
            <img class="actor" :src="item.icon" alt="">
            <div class="item_info">
              <div class="small_title">{{ item.nickName }}</div>
              <div class="info">{{ item.introduce }}</div>
            </div>
            <div class="add_btn">
              关注
              <el-icon><CirclePlus /></el-icon>
            </div>
          </div>
        </template>
        <div class="pager">
          <el-pagination small layout="prev, pager, next" :total="9" :page-size="3" />
        </div>
      </div>
    </div>

    <!-- 近期赛事 -->
    <div class="recent-match">
      <div class="top">
        <h2 class="title">近期赛事</h2>
        <el-icon size="20px"><ArrowRightBold /></el-icon>
      </div>
      <div class="list">
        <template v-for="(item, index) in match" :key="item.id">
          <div class="item">
            <a class="title" :href="item.url">{{ item.title }}</a>
            <div class="info">
              <img src="@/assets/img/home/match_icon.png" alt="" class="icon">
              <div class="ranking">&lt;热门竞赛榜&gt; 前<span class="span">{{ item.ranking }}</span>名</div>
              <div class="data">浏览{{ formatNum(item.browse) }}万 关注{{ item.attention }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
// import recomend from '@/assets/data/recommend'
// import match from '@/assets/data/match'
import useHomeStore from '@/store/modules/home';
import { toRefs } from 'vue';

import { formatNum } from '@/utils/formatData'

// 获取store中数据
const useStore = useHomeStore()
const { userInfo, recommend, match } = toRefs(useStore)

</script>

<style lang="less" scoped>
.right-card {
  position: relative;
  .creator-center, .recomend, .recent-match {
    padding: 10px;
    margin-bottom: 10px;
    background-color: var(--secondary-bgc);
  }

  // 创作中心
  .creator-center {
    .title {
      display: flex;
      width: 100%;

      .head {
        .image {
          width: 40px;
          height: 40px;
          margin-bottom: 10px;
          margin-right: 20px;
        }
      }

      .info {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        .level {
          padding: 2px 6px;
          border-radius: 14px;
          color: #fff;
          background-color: var(--btn-small-bgc);
          border: 1px solid var(--primary-color);
          cursor: pointer;
        }
      }
    }

    .icons {
      position: absolute;
      top: 38px;
      right: 12px;
      display: flex;
      justify-content: right;
      align-items: center;
      margin-top: 6px;

      .icon_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 6px;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          border: 3px solid rgba(183, 153, 255, 1);
          border-radius: 50%;
          .icon {
            width: 20px;
            height: 20px;
          }
        }

        .text {
          margin-top: 3px;
          font-size: 12px;
        }
      }
    }

    .data {
      display: flex;
      margin-top: 46px;
      padding: 6px;
      border-radius: 15px;
      border: 1px solid #8f8f8f;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
      font-size: 12px;

      .read {
        border-right: 1px solid #8f8f8f;
      }

      .wrapper {
        width: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
          display: flex;
          align-items: center;
          justify-content: center;

          .image {
            width: 18px;
            height: 18px;
            margin-left: 4px;
            cursor: pointer;
          }
        }
        .count {
          font-size: 26px;
          font-weight: 700;
          margin: 4px 0;
        }
      }
    }

    .outin_btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px;
      margin-top: 20px;
      padding: 0 16px;
      height: 40px;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      cursor: pointer;

      .icon {
        width: 20px;
        height: 20px;
      }
    }
  }

  // 推荐关注
  .recomend {
    .top {
      display: flex;
      align-items: center;
      .icon {
        width: 30px;
        height: 30px;
        margin-right: 14px;
      }
      .title {
        font-size: 18px;
      }
    }

    .main {
      margin: auto 0;
      margin-top: 20px;
      
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;

        .actor {
          width: 40px;
          height: 40px;
        }

        .item_info {
          width: 160px;
          display: flex;
          height: 44px;
          flex-direction: column;
          justify-content: space-between;

          .small_title {
            font-weight: 700;
          }

          .info {
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .add_btn {
          display: flex;
          align-items: center;
          color: var(--primary-color);
          font-weight: 700;
          cursor: pointer;
        }
      }
    }

    .pager {
      display: flex;
      justify-content: center;
      margin-top: 8px;
    }
  }

  // 近期赛事
  .recent-match {
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .list {
      .item {
        margin-top: 20px;
        .title {
          &:hover {
            text-decoration: underline;
          }
        }
        .info {
          display: flex;
          align-items: end;
          margin-top: 6px;
          font-size: 12px;

          .icon {
            width: 24px;
            height: 18px;
          }

          .ranking {
            margin: 0 6px;
          }

          .data {
            position: relative;
            top: 2px;
            color: var(--secondary-text-color);
          }
        }
      }
    }
  }
}
</style>