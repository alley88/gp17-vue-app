<template>
  <div class="detail_goods detail_page">
    <!-- detail_swiper  -->

    <!-- 轮播 -->
    <swiper ref="mySwiper" class="detail_banner" :options="swiperOption">
      <swiper-slide v-for="(item,index) in details.templatePhoto" :key="index">
        <img v-lazy="item.big_image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>


    <!-- detail_info -->
    <div class="detail_info">
      <div>{{details.productInfo?details.productInfo.product_name :""}}</div>
      <div>{{details.productInfo?details.productInfo.product_desc:""}}</div>
      <div class="price">
        <small>￥</small>
        <em>{{details.productInfo?details.productInfo.price:""}}</em>
      </div>
      <div class="size">
        <span class="cur" data-pid="36163">
          <strong>{{details.productItem?details.productItem[0].volume:""}}</strong>
          <small>明日达</small>
        </span>
        <em>{{details.sendTimeMsg}}</em>
      </div>
    </div>

    <!-- address -->
    <div class="detail_address">
      <div>送至</div>
      <div>北京科技职业技术学院</div>
    </div>

    <!-- detail_comment -->
    <div class="detail_comment">
      <div class="detail_comment-title">
        <div>评价(24)</div>
        <div>
          <span>100%</span>
          <span>好评</span>
        </div>
      </div>
      <div class="detail_comment-list">
        <div class="comment_list-item" v-for="(item,index) in comments" :key="index">
          <div class="comment-info">
            <div>
              <div>
                <img :src="item.userface" />
              </div>
              <div>{{item.user_name}}</div>
            </div>
            <div>{{item.time}}</div>
          </div>
          <div class="comment-level">
            <span>口感 {{item.star_eat}}</span>
            <span>颜值 {{item.star_show}}</span>
          </div>
          <div class="comment-msg">{{item.content}}</div>
          <div class="comment-img">
            <img 
                v-show="item.images.length>0"
                v-for="(child,idx) in item.images"
                :key="idx"
                :src="child" 
            />
          </div>
        </div>
        <div class="text-center">
          <span>查看全部评论</span>
        </div>
      </div>
    </div>
    <AddCart/>
  </div>
</template>


<script>
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Vue from "vue";
import { mapState,mapActions} from 'vuex';
import {detailsCommentApi} from "@api/request.js"
import AddCart from "@components/detail/addCart"
Vue.use(VueAwesomeSwiper);
export default {
  name: "detail_goods",
  data() {
    return {
        comments:[],
        swiperOption: {
            autoplay: {
            disableOnInteraction: false
            },
            pagination: {
            el: ".swiper-pagination"
            }
        }
    };
  },
  components: {
    swiper,
    swiperSlide,
    AddCart
  },
  computed:{
      ...mapState({
          details:state=>state.detail.details
      })
  },
  methods: {
      ...mapActions({
            getAsyncDetail:"detail/getAsyncDetail"
        })
  },
   props:["product_id"],
    watch:{
        product_id:{
           async handler(newVal){
                if(!newVal){
                  newVal = localStorage.getItem("product_id")
                }
                this.getAsyncDetail(newVal)
                let data = await detailsCommentApi(newVal);
                this.comments = data.data.data;
                localStorage.setItem("product_id",newVal)
            },
            immediate:true
        }
         
    }
    
};
</script>

<style>
.detail_goods {
  padding-top: 0.9rem;
}
/* detail_banner */
.detail_banner {
  width: 100%;
  height: 7.5rem;
  overflow: hidden;
}


.detail_banner  img {
  width: 7.5rem;
  height: 7.5rem;
}
/* detail_info */
.detail_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}
.detail_info > div:nth-child(1) {
  font-size: 0.34rem;
  color: #333;
  margin-bottom: 0.1rem;
}
.detail_info > div:nth-child(2) {
  font-size: 0.28rem;
  color: #878787;
  margin-bottom: 0.1rem;
}

.detail_info .price {
  margin-bottom: 0.1rem;
  color: #ff8000;
}

.detail_info .price small {
  font-size: 0.2rem;
}
.detail_info .price em {
  font-size: 0.6rem;
  font-style: normal;
}

.detail_info .size {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.detail_info .size .cur {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: #ff8000;
  background: #ff8000;
  color: #fff;
  width: 2rem;
  height: 0.8rem;
  margin-bottom: 0.2rem;
}
.detail_info .size .cur strong{
  font-size: .16rem;
}

.detail_info .size em {
  font-style: normal;
  color: #ff8000;
  font-size: .12rem;
}
/* detail_address */
.detail_address {
  margin-bottom: 0.2rem;
  background: #fff;
  display: flex;
  padding: 0 0.2rem;
  height: 0.9rem;
  width: 100%;
  align-items: center;
}
.detail_address div:nth-child(1) {
  color: #878787;
  font-size: 0.28rem;
  margin-right: 0.2rem;
}
.detail_address div:nth-child(2) {
  color: #333;
  font-size: 0.28rem;
}

/* detail_comment */

.detail_comment {
  padding: 0 0.2rem;
  background: #fff;
}
.detail_comment .detail_comment-title {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #ccc;
}
.detail_comment .detail_comment-title > div:nth-child(2) span:nth-child(1) {
  color: #ff8000;
}
/* 评论 */
.comment_list-item {
  padding-top: 0.4rem;
}
.comment_list-item .comment-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment_list-item .comment-info > div:nth-child(1) {
  display: flex;
  align-items: center;
  height: 0.72rem;
}
.comment_list-item .comment-info > div:nth-child(1) img {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  margin-right: 0.32rem;
}
.comment_list-item .comment-level {
  display: flex;
  align-items: center;
  height: 0.6rem;
}
.comment_list-item .comment-level span {
  margin-right: 0.6rem;
  color: #878787;
}
.comment_list-item .comment-msg {
  color: #333;
  font-size: 0.3rem;
}
.comment_list-item .comment-img {
  height: 1.28rem;
  width: 100%;
  margin-top: 0.4rem;
}
.comment_list-item .comment-img img {
  width: 1.12rem;
  height: 1.12rem;
}
.text-center {
  width: 100%;
  margin-top: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  margin-bottom: 0.9rem;
}
.text-center span {
  width: 2.08rem;
  height: 0.6rem;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.3rem;
  color: #333;
  border: 0.01rem solid #ccc;
}


</style>