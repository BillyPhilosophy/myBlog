import request  from "@/utils/request";


export const userLogin = (loginParams:LoginParams)=>{
  return request({
    method: 'POST',
    url:'/api/users/login',
    data:loginParams
  })
}

export const userRegister = (registerParams:RegisterParams)=>{
  return request({
    method: 'POST',
    url:'/api/users/register',
    data:registerParams
  })
}