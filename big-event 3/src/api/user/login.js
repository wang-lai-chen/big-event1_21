import request from '@/utils/request.js'

// 登录接口函数
export const userLoginService = (loginData)=>{
    const params = new URLSearchParams();
    for(let key in loginData){
        params.append(key,loginData[key])
    }
    return request.post('user/login',params)
}
