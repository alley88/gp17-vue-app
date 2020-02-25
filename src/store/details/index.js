import {detailsApi} from "@api/request.js";
export default {
    state:{
        details:{}
    },
    mutations:{
        getDetail(state,data){
            state.details = data.data;
        }
    },
    actions:{
        async getAsyncDetail({commit},product_id){
            let data = await detailsApi(product_id);
            commit("getDetail",data.data)
        }
    },
    namespaced: true
}