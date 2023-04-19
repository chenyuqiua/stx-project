<template>
  <div class="recommend-notice">
    <template v-for="(item, index) in allArticle" :key="index">
      <div class="article-item">
        <h2 class="title">{{ item.title }}</h2>
        <div class="text" @click="onTextBtn(item.id)">{{ item.content }}</div>
        <div class="bottom">
          <div class="praise praise_step">
            <img class="image" src="@/assets/img/home/praise_active.png" alt="">
            赞同
            {{ item.praise }}
          </div>
          <div class="step praise_step">
            <img src="@/assets/img/home/step_active.png" alt="" class="image">
            踩
          </div>
          <div class="detail_info">
            <div class="icon">
              <img class="icon_img" src="@/assets/img/home/comment_icon.png" alt="">
              <div class="icon_span">32条评论</div>
            </div>
            <div class="icon">
              <img class="icon_img" src="@/assets/img/home/collect_icon.png" alt="">
              <div class="icon_span">举报</div>
            </div>
            <div class="icon">
              <img class="icon_img" src="@/assets/img/home/share_icon.png" alt="">
              <div class="icon_span">分享</div>
            </div>
            <div class="icon">
              <img class="icon_img" src="@/assets/img/home/report_icon.png" alt="">
              <div class="icon_span">收藏</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import recomend from '@/assets/data/recommend-notice'
import useHomeStore from '@/store/modules/home';
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const store = useHomeStore()
const { allArticle } = toRefs(store)

// 文章点击
function onTextBtn(id) {
  router.push(`/detail/${id}`)
}
</script>

<style lang="less" scoped>
.recommend-notice {
  background-color: var(--secondary-bgc);

  .article-item {
    padding: 20px 10px;
    border: 1px solid #777;
    .title {
      font-size: 22px;
    }

    .text {
      margin: 20px 0;
      padding: 10px;
      height: 150px;
      font-size: 16px;
      line-height: 26px;
      text-indent: 2em;
      background-color: #fff;
      cursor: pointer;
      

      // 多行文本
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;

      &:hover{
        text-decoration: underline;
      }
    }

    .bottom {
      display: flex;
      .praise_step {
        display: flex;
        align-items: center;
        padding: 4px 8px;
        width: 90px;
        border-radius: 12px;
        border: 1px solid var(--primary-color);
        background-color: var(--btn-small-bgc);
        cursor: pointer;

        .image {
          width: 20px;
          height: 20px;
          margin-right: 4px;
        }
      }

      .step {
        width: 40px;
        margin-left: 10px;
      }

      .detail_info {
        display: flex;
        margin-left: 20px;
        color: var(--secondary-text-color);

        .icon {
          display: flex;
          align-items: center;
          margin: 0 10px;
          cursor: pointer;

          .icon_img {
            width: 24px;
            height: 24px;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>