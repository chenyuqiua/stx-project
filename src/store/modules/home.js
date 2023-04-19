import { addCommentData, getAccountInfo, getArticleAllData, getArticleDataByID, getCommentData, getMatchData, getRecommendData } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    userInfo: {},
    recommend: {},
    match: [],
    allArticle: [],
    oneArticle: {},
    curComment: []
  }),
  actions: {
    async fetchGetAccountInfo() {
      const res = await getAccountInfo()
      console.log("当前登录用户信息:", res.data)
      this.userInfo = res.data
    },

    async fetchGetRecommendData(page) {
      const res = await getRecommendData(page)
      console.log("推荐关注信息:", res.data)
      this.recommend = res.data
    },

    async fetchGetMatchData() {
      const res = await getMatchData()
      console.log("比赛信息:", res.data)
      this.match = res.data
    },

    async fetchGetCommentData(id) {
      const res = await getCommentData(id)
      console.log("当前文章评论信息:", res.data)
      this.curComment = res.data
    },

    async fetchGetArticleAllData() {
      const res = await getArticleAllData()
      console.log("全部文章信息:", res.data)
      this.allArticle = res.data
    },

    async fetchGetArticleDataByID(id) {
      const res = await getArticleDataByID(id)
      console.log("根据id获取文章信息:", res.data)
      this.oneArticle = res.data
    },

    async fetchAddCommentData(comment) {
      const res = await addCommentData(comment)
      console.log("添加评论结果:", res.data)
    },

    async fetchSearchArticleRequest(message) {
      const res = await searchArticleRequest(message)
      console.log("搜所结果:", res)
    }
  }
})

export default useHomeStore