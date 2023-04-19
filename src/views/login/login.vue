<template>
  <div class="login">
    <div class="logo">
      <img class="image" src="@/assets/img/login/logo.png" alt="">
    </div>
    <div class="main">
      <div class="left">
        <img class="image" src="@/assets/img/login/login_main_bg.png" alt="">
      </div>
      <div class="right">
        <div class="title">
          <h2 class="c_title">欢迎来到双体系！</h2>
          <h2 class="e_title">welcome to shuangtixi！</h2>
        </div>
        <div class="input">
          <div class="wrapper">
            <img src="@/assets/img/login/user_icon.png" alt="" class="image" >
            <input class="username" type="text" placeholder="请输入工号" v-model="stusername">
          </div>
          <div class="wrapper">
            <img src="@/assets/img/login/pasw_icon.png" alt="" class="image" >
            <input class="password" type="password" placeholder="请输入密码" v-model="password">
          </div>
        </div>
        <div class="btn_wrapper">
          <button class="btn" @click="onLoginClick">登录</button>
        </div>
        <div class="footer">
          <div class="other wrapper">
            <img class="image" src="@/assets/img/login/add_icon.png" alt="">
            <div class="btn">其他登录方式</div>
          </div>
          <div class="feedback wrapper">
            <img class="image" src="@/assets/img/login/feedback_icon.png" alt="">
            <div class="btn">反馈</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import useLoginStore from '@/store/modules/login';
import { ref, toRefs } from 'vue';

const useStore = useLoginStore()

const stusername = ref("")
const password = ref("")

async function onLoginClick() {
  const user = {
    stusername: stusername.value,
    password: password.value
  }
  
  // 发送登录请求
  await useStore.fetchAccountLoginRequest(user)
  const { success } = toRefs(useStore)
  if(success.value ) {
    router.push("/main")
  }
}
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  // background-image: linear-gradient(to bottom, #7A88FF, #7AFFAF);
  background-image: linear-gradient(to bottom, #081e71, #556c99);
  
  .logo {
    position: absolute;
    right: -80px;
    top: 0;
    width: 600px;
    .image {
      width: 100%;
    }
  }

  .main {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    border-radius: 28px;
    overflow: hidden;

    .left {
      width: 560px;
      height: 100%;

      .image {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      flex: 1;
      background-color: #fff;

      text-align: center;

      .title {
        margin-top: 40px;

        .e_title {
          margin-top: 30px;
          font-size: 18px;
        }
      }

      .input {
        margin-top: 50px;

        .wrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 26px 0;

          input {
            width: 170px;
            padding: 6px 5px;
            border: none;
            background: rgba(236, 241, 255, 1);
          }
        }

        .image {
          width: 20px;
          height: 20px;
        }
      }

      .btn_wrapper {
        margin-top: 40px;
        .btn {
          width: 210px;
          height: 40px;
          border-radius: 33px;
          border: 1px solid rgba(112, 112, 112, 1);            
          background: rgba(249, 90, 107, 1);
          color: #fff;
          font-weight: 400;
          font-size: 20px;
          cursor: pointer;
        }
      }

      .footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 30px;
        padding: 0 8px;
        color: var(--secondary-text-color);
        font-size: 12px;

        .wrapper {
          display: flex;
          justify-self: center;
          align-items: center;

          .image {
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }

          .btn {
            cursor: pointer;
            &:hover {
              color: var(--secondary-text-select-color);
            }
          }
        }
      }
    }
  }
}
</style>