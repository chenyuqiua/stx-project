import yqRequest from "../request"

// 用户登录
export function accountLoginRequest(user) {
  return yqRequest.post({
    method: "post",
    url: "/user/login2",
    data: user
  })
}