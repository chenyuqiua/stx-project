import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";


class YQRequest {
  // 传入默认配置信息, 创建新的实例
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      let token = localStorage.getItem('token');
      // 添加token
      //Bearer为token类型，根据自己的类型更改
      token && (config.headers.Authorization = JSON.parse(token));
      return config;
    }, (error) => {
      // 请求出错
      return Promise.reject(error);
    });
  }

  // 1.封装request
  request(config) {
    // 返回一个Promise, 对数据转换
    return new Promise((reslove, reject) => {
      this.instance.request(config).then(res => {
        reslove(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  // 2.封装get
  get(config) {
    //  调用自己的request函数
    return this.request({ ...config, methods: "get" })
  }

  // 3.封装psot
  post(config) {
    //  调用自己的request函数
    return this.request({ ...config, methods: "post" })
  }
}

export default new YQRequest(BASE_URL, TIMEOUT)