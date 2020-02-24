import axios from "axios";

const http = axios.create({
    timeout:5000,
    withCredentials:true,
    //baseUrl:""
})

http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }
    //config.headers["authToken"] = store.token;
    //加loading

    return config;
},(err)=>{
    return Promise.reject(err);
})


http.interceptors.response.use(config=>{
    //关闭loading

    if(config.status == 200){
        return config.data;
    }
},(err)=>{
    return Promise.reject(err);
})


export default http;