
import { ElMessage } from 'element-plus'
import { useStore } from './../store/main'
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

enum AuthStatus {
  TokenExpired = 10100,
  TokenInvalid = 10101,
  TokenMissing = 10102,
  TokenDefault = 10103,
}

const baseUrl = import.meta.env.VITE_BASE_API
const CancelToken = axios.CancelToken // 用于axios取消请求
const request: AxiosInstance = axios.create({
  baseURL: baseUrl, //生产环境
  timeout: 7000
})
//请求拦截器  发请求之前，拦截器可以监测到
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  //config 配置对象
  const store = useStore()
  const source = CancelToken.source()
  const { reqCancel } = useStore()
  const url = config.url
  config.cancelToken = source.token
  if (store.user.token) {
    config.headers.Authorization = `Bearer ${store.user.token}`
  }
  // 当有重复请求的时候 则利用这个方式来取消重复的请求
  if (reqCancel[url]) {
    delete reqCancel[url]
  }
  reqCancel[url] = source.cancel
  store.setCancel(reqCancel)
  return config
},(err: AxiosError) => {
  showError(err.message)
  Promise.reject(err)
})

request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status > 400) {
      showError(response.statusText)
      throw new Error(`请求失败`)
    } else if (Object.values(AuthStatus).includes(response.data.returnCode)) {
      handleStatusCode(response.data.returnCode)
    } else if (response.data.returnCode !== 0) {//除了handleStatusCode的特殊处理之外的其他状态码
      if (response.data.returnMsg) {
        showError(response.data.returnMsg)
      }
      throw new Error(response.data.returnMsg)
    }
    return response
  },
  (err: AxiosError) => {
    showError(err.message)
    Promise.reject(err)
  }
)
// 设置elementError
function showError(message: string){
  ElMessage.error(message)
}
// 状态码处理
function handleStatusCode(status: number) {
  const store = useStore();
  switch (status) {
    case AuthStatus.TokenExpired:
    case AuthStatus.TokenInvalid:
    case AuthStatus.TokenMissing:
    case AuthStatus.TokenDefault:
      handleTokenExpired();
      break;
    default:
      // 处理其他情况，如果有需要的话
      break;
  }
}
// token认证不通过
function handleTokenExpired() {
  const store = useStore()
  if (store.user.token) {
    store.setUserToken('')
  }
}

export default request
