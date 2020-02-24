<template>    
    <div class="datalist">
        <div class="datalist_item" v-for="(item,index) in list" :key="index">
            <div class="imageTitleBanner">
                <img v-lazy="item.imageTitleBanner[0].image" alt="">
            </div>
            <div class="promotionBanner">
                <img v-lazy="item.promotionBanner[0].image" alt="">
            </div> 
            <RecommendList :recommend="item.proBannerTagUnderImage"/>
        </div>
    </div>
</template>


<script>
import RecommendList from "../RecommendList"
import {mapState} from "vuex";
export default {
    name:"dataList",
    components:{
        RecommendList
    },
    computed: {
        ...mapState({
            list:state=>state.homepage.dataList
        })
    },
}
</script>

<style>
.datalist{
    background: #fff;
    overflow: hidden;
}
.datalist_item {
    margin-top: .2rem;
}

.datalist_item .imageTitleBanner,
.datalist_item .imageTitleBanner img {
    width: 100%;
    height: 1.28rem;
}

.datalist_item .promotionBanner,
.datalist_item .promotionBanner img {
    width: 100%;
    height: 2.2rem;
}
</style>