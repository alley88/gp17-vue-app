<template>
  <div class="search_pages">
    <SearchHeader @handleHistory="getHistory"/>
    <div class="hot_search">
      <div>热门搜索</div>
      <div>
        <ul>
          <v-touch 
            v-for="(item,index) in hotSearchList" 
            :key="index"
            tag="li"
            @tap="handleSearchList(item)"
            >{{item}}</v-touch>
        </ul>
      </div>
    </div>
    <div class="clear_search" v-if="historyList.length>0?true:false">
      <div>历史记录</div>
      <div>
        <ul>
          <v-touch 
            v-for="(item,index) in historyList" 
            :key="index"
            @tap="handleSearchList(item)"
             tag="li"
            >{{item}}</v-touch >
        </ul>
      </div>
      <v-touch @tap="handleClearHistory">清除搜索记录</v-touch>
    </div>
    
  </div>
</template>


<script>
import { hotSearchFetchData } from "./index.js";
import SearchHeader from "./header.vue"
export default {
  name: "search",
  data() {
    return {
      hotSearchList: JSON.parse(localStorage.getItem("searchhotList")) || [],
      historyList: JSON.parse(localStorage.getItem("historyList")) || [],
    };
  },
  components:{
    SearchHeader
  },
  created() {
    if (!localStorage.getItem("searchhotList")) {
      this.getHotList();
    }
  },
  methods: {
    handleSearchList(item){
      this.$router.push("/searchList/"+item);
      this.getHistory(item);
    },
    getHistory(item){
     
        if(!localStorage.getItem("historyList")){
            this.historyList.push(item);
           
        }else{
            var arr = JSON.parse(localStorage.getItem("historyList"));
            var flag = arr.includes(item);
            if(!flag){
                arr.push(item);
                this.historyList = arr;
            }
        }
        localStorage.setItem("historyList",JSON.stringify(this.historyList));
      
      
    },
    async getHotList() {
      let data = await hotSearchFetchData();
      this.hotSearchList = data.data;
      localStorage.setItem("searchhotList", JSON.stringify(data.data));
    },
   
    handleClearHistory(){
        this.historyList = [];
        localStorage.removeItem("historyList")
    }
  },
  
};
</script>

<style>


/* hot_search */
.hot_search {
  background: #fff;
  padding: 0.4rem 0.2rem;
}
.hot_search > div:nth-child(1) {
  color: #878787;
  font-size: 0.3rem;
}

.hot_search > div:nth-child(2) ul {
  display: flex;
  flex-wrap: wrap;
}
.hot_search > div:nth-child(2) ul li {
  padding: 0.14rem 0.16rem;
  background: #f1f1f1;
  margin-top: 0.2rem;
  margin-left: 0.08rem;
  margin-right: 0.08rem;
  font-size: 0.26rem;
}

/* clear_search */
.clear_search {
  padding: 0.2rem 0.2rem;
  background: #fff;
}
.clear_search > div:nth-child(1) {
  font-size: 0.28rem;
  color: #878787;
}
.clear_search > div:nth-child(2) ul {
  display: flex;
  flex-wrap: wrap;
}
.clear_search > div:nth-child(2) ul li {
  padding: 0.14rem 0.16rem;
  background: #f1f1f1;
  margin-top: 0.2rem;
  margin-left: 0.08rem;
  margin-right: 0.08rem;
  font-size: 0.26rem;
}
.clear_search > div:nth-child(3) {
  width: 3.32rem;
  height: 0.82rem;
  border: 0.01rem solid #f1f1f1;
  text-align: center;
  line-height: 0.82rem;
  transform: translateX(50%);
  margin-top: 0.8rem;
  color: #878787;
}
.search_pages{
    position: relative;
}

</style>