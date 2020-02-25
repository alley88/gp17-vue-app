import Vue from 'vue'
import Vuex from 'vuex'
import homepage from "./homepage"
import {cityApi} from "@api/request"
import detail from "./details"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityList:localStorage.getItem("cityList")?JSON.parse(localStorage.getItem("cityList")):[],
    hotCity:localStorage.getItem("hotCity")?JSON.parse(localStorage.getItem("hotCity")):[],
  },
  mutations: {
    handleCityList(state,data){
      var hotCity = [];
      var cityList = [];
      //热门城市
      for(var i=0;i<data.length;i++){
        if(data[i].isHot){
          hotCity.push({id:data[i].id,nm:data[i].nm})
        }
      }

      //城市列表
      /*
        [
          {index:A,list:[{id:1,nm:"鞍山"}，{id:1,nm:"鞍山"}，{id:1,nm:"鞍山"}]}
          {index:B,list:[{id:1,nm:"北京"}，{id:1,nm:"鞍山"}，{id:1,nm:"鞍山"}]}
        ]

      */
      
      for(var i=0;i<data.length;i++){
        var first = data[i].py.slice(0,1).toLocaleUpperCase();
        //判断当前首字符是否在cityList中
        if(isFirst(first).bStop){
          cityList[isFirst(first).index].list.push({id:data[i].id,nm:data[i].nm})
        }else{
          cityList.push({index:first,list:[{id:data[i].id,nm:data[i].nm}]})
        }
      }

      function isFirst(first){
        var bStop = false;
        var index = -1;
        for(var i=0;i<cityList.length;i++){
          if(cityList[i].index == first){
            bStop = true;
            index = i;
            break;
          }
        }
        return {
          index,
          bStop
        };
      }

      //排序
     cityList.sort((a,b)=>{
        if(a.index>b.index){
          return 1;
        }else{
          return -1;
        }
     })

     state.cityList = cityList;
     state.hotCity = hotCity;

     localStorage.setItem("cityList",JSON.stringify(cityList));
     localStorage.setItem("hotCity",JSON.stringify(hotCity))

    }
  },
  actions: {
    async handleGetCityList({commit}){
      let data = await cityApi();
     
      commit("handleCityList",data.data.cities)
    }
  },
  modules: {
    homepage,
    detail
  }
})
