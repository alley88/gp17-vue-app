<template>
  <div class="page">
    <Header />
    <!-- 轮播 -->
    <swiper ref="mySwiper" class="home_banner" :options="swiperOption">
        <swiper-slide v-for="(item,index) in banner" :key="index">
            <img v-lazy="item.image" />
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <!-- 广告 -->
   <div class="section">
        <div class="recommend">
            <img src="https://imgjd2.fruitday.com/images/2020-02-22/c47f62e2f31a04f1480bd5741b138c4b.jpg" alt="">
        </div>
        <RecommendList :recommend="recommend"/>
    </div>
    <!-- datalist -->
    <DataList/>
    <!-- goodsList -->
    <GoodsList/>
  </div>
</template>

<script>
import Vue from "vue"
import Header from "@components/home/header";
import {mapState} from "vuex";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import RecommendList from "@components/home/RecommendList"
import DataList from "@components/home/dataList"
import GoodsList from "@components/home/goodslist"
Vue.use(VueAwesomeSwiper)

export default {
  name: "Home",
  data(){
      return {
          swiperOption:{
              autoplay: {
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
              },
          }
      }
  },
  computed:{
      ...mapState({
          banner:state=>state.homepage.banner,
          recommend:state=>state.homepage.recommend
      })
  },
  components: {
    Header,
    swiper,
    swiperSlide,
    RecommendList,
    DataList,
    GoodsList
  },
  created() {
    if(!localStorage.getItem("homePage"))
      this.$store.dispatch("homepage/getHomepage");
    }
};
</script>

<style>
.home_banner,
.home_banner img {
  width: 100%;
  height: 160px;
  position: relative;
  overflow: hidden;
}

.home_banner ul {
  height: 100%;
  position: absolute;
}

.home_banner ul li {
  float: left;
}



.section {
    background: #fff;
    overflow: hidden;
    width:100%;
}

.section .recommend,
.section .recommend>img {
    width: 100%;
    height: 2.2rem;

}

</style>