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
            tap:true
        });
    },
    methods:{
        handleScrollTo(l=0,t=0){
            this.scroll.scrollTo(l,t,250)
        }
    }
}
</script>

<style>
    .wrapper{
        height:100%;
    }
</style>