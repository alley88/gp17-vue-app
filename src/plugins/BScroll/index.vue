<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:"scroll",
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            scrollX:true,
            click:true,
            tap:true,
            pullUpLoad:true
        });
    },
    methods:{
        handleScrollTo(l=0,t=0){
            this.scroll.scrollTo(l,t,250)
        },
        //上拉加载更多
        handlepullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback();
            })
        },
        //通知better-scroll可以进行下一次的数据请求了
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            //重新计算better-scroll
            this.scroll.refresh();
        }
    }
}
</script>

<style>
    .wrapper{
        height:100%;
    }
</style>