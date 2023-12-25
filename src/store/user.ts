import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive<UserEasy | UserAll>({
    userNo: '',
    username: '',
    avatar: '',
    role: 0,
    nickname: '',
    banner: '',
    introduce: ''
  })
  const setBaseInfo = (obj:UserEasy) => {
    Object.assign(userInfo, obj);
  }
  const setAllInfo = (obj:UserAll) => {
    Object.assign(userInfo, obj);
  }
  return {
    userInfo,
    setBaseInfo,
    setAllInfo
  }
})