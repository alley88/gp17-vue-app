<template>
  <div class="search_header">
    <v-touch class="search_back" @tap="handleBack" >
      <i class="iconfont">&#xe731;</i>
      <div>返回</div>
    </v-touch>
    <div class="search_content">
      <i class="iconfont">&#xe60b;</i>
      <input type="text" v-model="searchKeyWord" />
    </div>
    <div>搜索</div>
    <div class="searchListKeyWord" v-if="searchKeywordList.length>0" >
        <v-touch 
            v-for="(item,index) in searchKeywordList" 
            :key="index"
            tag="div"
            @tap="handleSearchList(item)"
            >{{item}}</v-touch>
    </div>
  </div>
</template>

<script>
import { searchkeywordData } from "./index.js";
import {throttle} from "@utils/utils.js"
export default {
  name: "searchHeader",
  data() {
    return {
      searchKeyWord: "",
      searchKeywordList:[]
    };
  },
  methods:{
    //返回按钮
    handleBack(){
      this.$router.back();
    },
     handleSearchList(item){
        //1、跳转到searchList   2、将搜索的数据保存在历史记录中
        this.$emit("handleHistory",item)

        this.$router.push("/searchList/"+item);
        this.searchKeywordList.splice(0,this.searchKeywordList.length)
    },
  },
  watch: {
   searchKeyWord(newVal) {
      throttle( async ()=>{
        let data = await searchkeywordData(newVal);
        this.searchKeywordList = data.data;
      })
      
    }
  }
};
</script>

<style>
.search_header {
  width: 100%;
  height: 1.08rem;
  padding: 0 0.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.search_header .search_back {
  position: absolute;
  left: 0.2rem;
  display: flex;
  font-size: 0.3rem;
  align-items: center;
}
.search_header .search_back i {
  font-size: 0.5rem;
}

.search_header > div:nth-child(3) {
  position: absolute;
  right: 0.2rem;
  font-size: 0.3rem;
}
.search_header .search_content {
  display: flex;
  align-items: center;
  position: relative;
}

.search_header .search_content i {
  position: absolute;
  left: 0.2rem;
  font-size: 0.4rem;
}
.search_header .search_content input {
  border: 0;
  background: #eee;
  width: 4.5rem;
  height: 0.66rem;
  border-radius: 5px;
  padding-left: 0.8rem;
  font-size: 0.3rem;
  outline: none;
}
.searchListKeyWord{
    width:100%;
    height: 100%;
    position: absolute;
    left:0;
    top: 1.08rem;
    background: #fff;
    z-index:10;
}
.searchListKeyWord div{
    width:100%;
    height: .98rem;
    padding-left: .2rem;
    font-size:.3rem;
    color:#333;
    border-bottom: .01rem solid #eee;
    line-height: .98rem;
    background:#fff;
}
</style>