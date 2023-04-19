import yqRequest from "../request"

// 获取个人信息
export function getAccountInfo() {
  return yqRequest.get({
    url: "/user/me"
  })
}

// 获取关注列表
export function getRecommendData(page) {
  return yqRequest.request({
    method: "post",
    url: `/recommend/${page}`
  })
}

// 获取比赛信息
export function getMatchData() {
  return yqRequest.get({
    url: "/url/all"
  })
}

// 获取评论信息
export function getCommentData(id) {
  return yqRequest.get({
    url: `/comments/all/${id}`
  })
}

// 发布评论
export function addCommentData(comment) {
  return yqRequest.request({
    method: "post",
    url: "/comments/add",
    data: comment
  })
}

// 获取全部文章信息
export function getArticleAllData() {
  return yqRequest.get({
    url: "/issues/all"
  })
}

// 根据id获取文章信息
export function getArticleDataByID(id) {
  return yqRequest.request({
    method: "put",
    url: `/issues/${id}`
  })
}


// 搜索网络请求
export function searchArticleRequest(message) {
  return yqRequest.request({
    method: "post",
    url: "/search/Search",
    data: {
      message
    }
  })
}