<template>
  <div class="text-detail">
    <div class="article">
      <h2 class="title">{{ oneArticle.title }}</h2>
      <div class="text">{{ oneArticle.content }}</div>
    </div>

    <div class="bottom">
      <div class="wrapper">
        <div class="praise praise_step">
          <img class="image" src="@/assets/img/home/praise_active.png" alt="">
          赞同
        </div>
        <div class="step praise_step">
          <img src="@/assets/img/home/step_active.png" alt="" class="image">
          踩
        </div>
      </div>
      <div class="detail_info">
        <div class="icon" @click="onCommentClick">
          <img class="icon_img" src="@/assets/img/home/comment_icon.png" alt="">
          <div class="icon_span">{{ curComment.length }}条评论</div>
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

    <div class="cover" v-show="isShow">
      <div class="left" @click="onLeftClick">1</div>
      <div class="right">
        <div class="top">
          <div class="title">
            评论 14
          </div>
          <el-icon class="close" @click="onCloseBtn"><Close /></el-icon>
        </div>
        <div class="input">
          <el-input
            v-model="textarea"
            :rows="6"
            type="textarea"
            placeholder="欢迎高质量的评论，低质的评论会被折叠"
          />
          <div class="btn">
            <el-button @click="onBtnClick" type="success" plain>发布</el-button>
          </div>
        </div>
        <div class="list">
          <template v-for="item in curComment">
            <div class="item">
              <div class="span">{{ item.content }}</div>
              <div class="time">{{ item.createTime }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';

// 文章信息
let textarea = ref("")

// 根据id获取文章信息
const route = useRoute()
const store = useHomeStore()
let articleId = route.params.id
store.fetchGetArticleDataByID(articleId)
const { oneArticle, curComment, userInfo } = toRefs(store)

// 发送网络请求
store.fetchGetCommentData(articleId)

// 评论窗口控制
const isShow = ref(false)
function onCommentClick() {
  isShow.value = true
}
function onLeftClick() {
  isShow.value = false
}
function onCloseBtn() {
  isShow.value = false
}

// 时间监听
function onBtnClick() {
  const comment = {
    userId: userInfo.value.id,
    issuesId: userInfo.value.id,
    parentId: userInfo.value.id,
    answerId: userInfo.value.id,
    content: textarea.value
  }
  store.fetchAddCommentData(comment)
}
</script>

<style lang="less" scoped>
.text-detail {
  // position: relative;
  width: 1000px;
  margin: 0 auto;
  background-color: var(--secondary-bgc);
  height: 100vh;

  .article {
    padding: 20px;

    .title {
      margin: 20px 0;
      font-size: 22px;
    }

    .text {
      text-indent: 2em;
      font-size: 16px;
    }
  }  

  .bottom {
    position: fixed;
    bottom: 0;
    width: 980px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -5px 3px rgba(0, 0, 0, .1);
    background-color: var(--secondary-bgc);
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

    .wrapper {
      display: flex;
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

  .cover {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .1);

    .left {
      flex: 1;
    }

    .right {
      width: 500px;
      background-color: var(--secondary-bgc);

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid var(--secondary-text-color);
        font-size: 20px;

        .close {
          cursor: pointer;
        }
      }

      .input {
        padding: 20px;
        padding-bottom: 0;

        .btn {
          margin-top: 20px;
          text-align: right;
        }
      }

      .list {
        padding: 20px;
        font-size: 16px;

        .item {
          margin: 20px 0;

          .time {
            margin-top: 5px;
            font-size: 12px;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>