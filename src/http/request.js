import axios from 'axios'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000
})

// 拦截器的添加
request.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

//响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data

    if (!Number(res.code)) return res

    return Promise.reject(res)
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
