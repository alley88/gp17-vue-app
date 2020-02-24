<template>
    <header>
        <div class="header_l">
            <div class="attr_img">
                <img src="https://huodongjd1.fruitday.com/sale/appxx/send_to_2.png" />
            </div>
            <div class="header_l-address">
                百联奥特莱斯广场
            </div>
        </div>
        <div class="header_r">
            <i class="iconfont">&#xe60b;</i>
        </div>
    </header>
</template>


<script>
export default {
    
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