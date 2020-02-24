import http from "@utils/request.js"
import api from "@api/index.js"
export default {
    state:{
        banner:[],
        dataList:[],
        goodsList:[],
        promotionBanner:[],
        recommend:[]
    },
    mutations:{
        getHomeData(state,data){
           state.banner = data.data.banner;
           state.dataList = data.data.dataList;
           state.goodsList = data.data.goodsList;
           state.promotionBanner = data.data.promotionBanner;
           state.recommend = data.data.recommend;
        }
    },
    actions:{
        async getHomepage({commit}){
            let data = await  http({
                method:"get",
                url:api.home.homepage
            })
            commit("getHomeData",data)
        }
    },
    namespaced: true
}