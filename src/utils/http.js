import axios from "axios";
//import qs from "qs";
import { Indicator, MessageBox } from 'mint-ui'

const http = axios.create({
    //baseURL:"XXXX",
    timeout:5000
})


//请求拦截
http.interceptors.request.use((config)=>{
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })

    return config;

},(err)=>{
    return Promise.reject(err);
})



//响应拦截
http.interceptors.response.use((res)=>{
    let ret = null
    if (res.status === 200) {
      ret = Promise.resolve(res.data)
    } else {
      const errMessage = res.status.errMessage || '未知'
      MessageBox({
        title: '出错了',
        message: errMessage,
        confirmButtonText: 'ok',
        showCancelButton: true
      })
    }
    Indicator.close()
    return ret
},(err)=>{
    return Promise.reject(err);
})


export default (method,url,data=null)=>{
    if(method == "post"){
        return http.post(url,data);
    }else if(method == "get"){
        return http.get(url,{params:data});
    }else{
        return;
    }
}