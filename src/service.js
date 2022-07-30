import axios from 'axios'

const service = axios.create({
  // baseURL会自动加在接口地址上
  baseURL: '/api',
  timeout: 3000,
  headers: {
    'Content-type': 'application/json;charset=utf-8'
  },
  auth: {
    username: 'superadmin',
    password: '1234567890'
  }
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 发送请求前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做些什么
  return response
}, function (error) {
  // 对响应错误做些什么
  return Promise.reject(error)
})
// export default
export default service
