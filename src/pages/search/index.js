import request from "@utils/request"
import api from "@api";

//热门搜索
export const hotSearchFetchData = ()=>{
    return request({
        method:"get",
        url:api.search.hotsearch
    })
}


//搜索关键字
export const searchkeywordData = (keyword)=>{
    return request({
        method:"get",
        url:api.search.search,
        data:{
            keyword
        }
    })
}


//搜索列表
export const searchListtData = (keyword)=>{
    return request({
        method:"get",
        url:api.search.searchList,
        data:{
            keyword
        }
    })
}