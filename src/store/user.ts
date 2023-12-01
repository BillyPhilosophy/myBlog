import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserEasy | UserAll>({
    userNo: '',
    username: '',
    avatar: '',
    role: 0,
    nickname: '',
    banner: '',
    introduce: ''
  })
  const setBaseInfo = (obj:UserEasy) => {
    userInfo.value = obj
  }
  const setAllInfo = (obj:UserAll) => {
    userInfo.value = obj
  }
  return {
    userInfo,
    setBaseInfo,
    setAllInfo
  }
})