<template>
    <header>
        <div class="header_l">
            <div class="attr_img">
                <img src="https://huodongjd1.fruitday.com/sale/appxx/send_to_2.png" />
            </div>
            <router-link to="/city" tag="div" class="header_l-address">
                北京
            </router-link>
        </div>
        <v-touch class="header_r" tag="div" @tap="handleSearch">
            <i class="iconfont">&#xe60b;</i>
        </v-touch>
    </header>
</template>


<script>
export default {
    name:"Header",
    methods:{
        handleSearch(){
            this.$router.push("/search")
        }
    }
}
</script>
<style>
    header {
            width: 100%;
            height: .76rem;
            display: flex;
            justify-content: space-between;
            padding: 0 .2rem;
            align-items: center;
            background: #fff;
        }

        header .header_l {
            display: flex;
            align-items: center;
        }

        .header_l .attr_img,
        .header_l .attr_img img {
            width: 1.2rem;
            height: .28rem;
        }

        .header_l-address {
            color: #65a032;
            margin-left: .2rem;
            font-size: .28rem
        }

        .header_r i {
            font-size: .5rem;
        }
</style>