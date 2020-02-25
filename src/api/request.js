import http from "@utils/request.js";
import api from "./index.js"
//城市列表
export const cityApi = ()=>{
    return http({
        method:"get",
        url:api.cityList.city
    })
}

//商品详情
export const detailsApi = (product_id)=>{
    return http({
        method:"get",
        data:{
            product_id
        },
        url:api.goods.details
    })
}

//商品详情评价

export const detailsCommentApi = (product_id)=>{
    return http({
        method:"get",
        data:{
            product_id
        },
        url:api.goods.comment
    })
}