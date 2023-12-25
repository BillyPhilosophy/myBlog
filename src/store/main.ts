import { getItem, setItem, removeItem } from "@/utils/storage";
import { defineStore } from 'pinia';
console.log(getItem('user'));
export const useStore = defineStore('main', () => {
  const user = reactive({
    token: getItem('user') || ''
  })
  // 请求重复拦截
  let reqCancel = {}
  // 设置token
  const setUserToken = (token: string) => {
    user.token = token;
    token ? setItem('user', token) : removeItem('user')
  }
  // 拦截缓存
  const setCancel = (obj:any) => {
    reqCancel = obj
  }
  return {
    user,
    reqCancel,
    setUserToken,
    setCancel
  }
})