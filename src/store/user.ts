import { defineStore } from 'pinia';

const useUserStore = defineStore('user', () => {
  const userInfo = reactive({
    id: '',
    username: '',
    avatar: '',
    role: '',
    nickname: '',
    banner: '',
    introduce: ''
  })
  return {
    userInfo
  }
})