//axios.create
//axios拦截器
//error.response.status各种状态码处理
import Axios from "axios"
const qs = require('qs');

Axios.create({
  baseURL: this.baseURL+'/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    data = qs.stringify(data);
    return data;
  }],
  withCredentials: true,
  timeout: (6*60*1000)
});
Axios.a = 1;

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
});

export default Axios;
