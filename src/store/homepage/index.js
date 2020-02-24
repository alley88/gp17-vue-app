import http from "@utils/request.js"
import api from "@api/index.js"
export default {
    state:{
        banner:localStorage.getItem("homePage")?
        JSON.parse(localStorage.getItem("homePage")).banner : [],
        dataList:localStorage.getItem("homePage")?JSON.parse(localStorage.getItem("homePage")).dataList :[],
        goodsList:localStorage.getItem("homePage")?JSON.parse(localStorage.getItem("homePage")).goodsList :[],
        promotionBanner:localStorage.getItem("homePage")?JSON.parse(localStorage.getItem("homePage")).promotionBanner :[],
        recommend:localStorage.getItem("homePage")?JSON.parse(localStorage.getItem("homePage")).recommend :[]
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

            localStorage.setItem("homePage",JSON.stringify(data.data))
        }
    },
    namespaced: true
}