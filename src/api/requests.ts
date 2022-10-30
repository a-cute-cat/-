import axios from 'axios'

const requests = axios.create({
    // baseURL: 'http://pcapi-xiaotuxian-front.itheima.net',
    // 备用地址
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//axios设置请求拦截器
axios.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err)
})
//axios设置响应拦截器
axios.interceptors.response.use(response => {
  return response.data //拦截处理响应结果，直接返回需要的数据
}, err => {
  console.log(err)
})

export default requests