<template>
  <div class="goodsList">
    <router-link v-for="(item) in dataList" :key="item.banner_ad_id"  tag="div"
        :to="'/detail/goods/'+item.target_id">
      <div>
        <img
          :src="item.image"
        />
      </div>
      <div class="goodsName">{{item.title}}</div>
      <div class="price">
        <span>￥{{item.price}}/{{item.volume}}克</span>
        <span>+</span>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
    name:"goodsListItme",
    props:{
        dataList:{
            type:Array,
            default:[]
        }
    }
};
</script>

<style>
.section_goodsList .goodsList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
}


.section_goodsList .goodsList>div {
    width:2.36rem;
    height: 3.4rem;
    flex-shrink: 0;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .2rem .16rem .3rem .16rem;
}

.section_goodsList .goodsList>div>div:nth-child(1) img {
    width: 1.92rem;
    height: 1.92rem;
}

.section_goodsList .goodsList>div .goodsName {
    width: 100%;
    color: #3a3a3a;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .24rem;
}

.section_goodsList .goodsList>div .price {
    color: #ff8000;
    display: flex;
}

.section_goodsList .goodsList>div .price>span:nth-child(2) {
    display: block;
    width: .38rem;
    height: .38rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    text-align: center;
    line-height: .38rem;
    font-size: .42rem;
}
</style>