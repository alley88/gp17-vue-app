import axios from "axios";
import loading from "../plugins/loading/index.js"
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
    loading.show();

    return config;
},(err)=>{
    return Promise.reject(err);
})


http.interceptors.response.use(config=>{
    //关闭loading

    if(config.status == 200){
        loading.hide();
        return config.data;
    }
},(err)=>{
    return Promise.reject(err);
})


export default http;