<template>
  <div class="page">
    <Header />
    <swiper ref="mySwiper" class="home_banner" :options="swiperOption">
    <!-- slides -->
        <swiper-slide v-for="(item,index) in banner" :key="index">
            <img :src="item.image" />
        </swiper-slide>
       
    <div class="swiper-pagination"  slot="pagination"></div>
   
  </swiper>
  </div>
</template>

<script>
import Vue from "vue"
import Header from "@components/home/header";
import {mapState} from "vuex";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
          banner:state=>state.homepage.banner
      })
  },
  components: {
    Header,
    swiper,
    swiperSlide
  },
  created() {
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
</style>