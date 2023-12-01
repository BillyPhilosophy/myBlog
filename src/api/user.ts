import request from "@/utils/request";

export const getBaseUserInfo = () =>{
  return request('/api/users/baseInfo')
}