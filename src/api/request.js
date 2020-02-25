import http from "@utils/request.js";
import api from "./index.js"
export const cityApi = ()=>{
    return http({
        method:"get",
        url:api.cityList.city
    })
}