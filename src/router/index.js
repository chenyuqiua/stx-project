import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/main",
      component: () => import("@/views/main/main.vue"),
      children: [
        {
          path: "/main",
          redirect: "/main/home"
        },
        {
          path: "/main/home",
          component: () => import("@/views/main/home/home.vue"),
          children: [
            {
              path: "/main/home",
              redirect: "/main/home/recomend"
            },
            {
              path: "/main/home/recomend",
              component: () => import("@/views/main/home/c-cpns/recomend-notice.vue")
            },
            {
              path: "/main/home/front",
              component: () => import("@/views/main/home/c-cpns/front-notice.vue")
            },
            {
              path: "/main/home/back",
              component: () => import("@/views/main/home/c-cpns/back-notice.vue")
            },
            {
              path: "/main/home/collect",
              component: () => import("@/views/main/home/c-cpns/collect-notice.vue")
            }
          ]
        },
        {
          path: "/main/school",
          component: () => import("@/views/main/school/school.vue")
        },
        {
          path: "/main/introduce",
          component: () => import("@/views/main/introduce/introduce.vue")
        },
        {
          path: "/main/found",
          component: () => import("@/views/main/found/found.vue")
        },
        {
          path: "/main/answer",
          component: () => import("@/views/main/answer/answer.vue")
        }
      ]
    },
    {
      path: "/detail/:id",
      component: () => import("@/components/text-detail/text-detail.vue")
    },
  ]
})

// 导航守卫: 拦截没有登录时返回登录页面
router.beforeEach((to) => {
  const token = localStorage.getItem("token")
  // 进入到main页面, 没有token返回登录页面
  if (to.path !== "/login" && !token) return "/login"
})
export default router