import request  from "@/utils/request";


export const userLogin = (loginParams:LoginParams)=>{
  return request({
    method: 'POST',
    url:'/users/login',
    data:loginParams
  })
}

export const userRegister = (registerParams:RegisterParams)=>{
  return request({
    method: 'POST',
    url:'/users/register',
    data:registerParams
  })
}