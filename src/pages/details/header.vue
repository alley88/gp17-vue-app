<template>
    <header class="detail_header">
        <v-touch tag="div" @tap="handleBack" class="detail_header-back">
            <i class="iconfont">&#xe731;</i>
        </v-touch>
        <div class="detail_header-nav">
            <ul>
                <router-link tag="li" to="/detail/goods" >商品</router-link>
                <router-link tag="li" to="/detail/detail" >详情</router-link>
                <router-link tag="li" to="/detail/evaluate" >评价</router-link>
            </ul>
        </div>
        <div class="detail_header-share">...</div>
    </header>
</template>

<script>
export default {
    name:"detailHeader",
    methods: {
        handleBack(){
            this.$router.back();
        }
    },
}
</script>

<style>
    .detail_header{
    width:100%;
    height:.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: #fff;
    border-bottom: .01rem solid #ccc;
}

.detail_header .detail_header-back{
    position: absolute;
    left:.36rem;
}
.detail_header-nav,.detail_header-nav ul{
    width:100%;
    height: 100%;
}
.detail_header-nav,.detail_header-nav ul li{
   padding: 0 .2rem;
   font-size: .3rem;
   color: #333;
}
.detail_header-nav,.detail_header-nav ul .router-link-exact-active{
    color: #65a032;
}

.detail_header-nav ul{
    display: flex;
    justify-content: center;
    align-items: center;
}
.detail_header .detail_header-back i{
    font-size: .6rem;
}
.detail_header .detail_header-share{
    position: absolute;
    right: .36rem;
    font-size: .4rem;
    font-weight: 900;
}
</style>