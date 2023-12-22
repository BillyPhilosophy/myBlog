import request  from "@/utils/request";


export const userLogin = (loginParams:LoginParams)=>{
  request({
    method: 'POST',
    url:'/api/users/login',
    data:loginParams
  })
}

export const userRegister = (registerParams:RegisterParams)=>{
  request({
    method: 'POST',
    url:'/api/users/register',
    data:registerParams
  })
}