import request from "@/utils/request";

export const getBaseUserInfo = () =>{
  return request('/users/baseInfo')
}