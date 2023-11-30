import { getItem, setItem, removeItem } from "@/utils/storage";
import { defineStore } from 'pinia';

export const useStore = defineStore('main', () => {
  const user = reactive({
    token: getItem('user') || ''
  });

  const setUserToken = (token: string) => {
    user.token = token;
    token ? setItem('user', token) : removeItem('user')
  }

  return {
    user,
    setUserToken
  }
})