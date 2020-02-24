<template>
  <div class="section_goodsList_content">
    <div class="section_goodsList" v-for="(item,index) in list" :key="index">
      <div class="section_goodsList-imageTitleBanner">
        <img
          v-lazy="item.imageTitleBanner[0].image"
        />
      </div>
      <div class="section_goodsList-bigImageBanner">
        <img
          v-lazy="item.promotionBanner?item.promotionBanner[0].image:''"
        />
      </div>
      <GoodsListItme :dataList="item.proBannerTagUnderImage"/>
    </div>
  </div>
</template>


<script>
import GoodsListItme from "../goodsListItme"
import {mapState} from "vuex";
export default {
    name:"goodsList",
    computed:{
        ...mapState({
            list:state=>state.homepage.goodsList
        })
    },
    components:{
        GoodsListItme
    }
};
</script>

<style>
.section_goodsList_content{
    width:100%;
    height: auto;
    background: #fff;
}
.section_goodsList{
    background: #fff;
    height: auto;
}
.section_goodsList .section_goodsList-imageTitleBanner,.section_goodsList .section_goodsList-imageTitleBanner img{
    width:100%;
    height: 1.28rem;
}

.section_goodsList .section_goodsList-bigImageBanner,.section_goodsList .section_goodsList-bigImageBanner img{
    width:100%;
    height: 3.2rem;
}
</style>