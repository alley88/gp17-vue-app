<template>
  <scroll>
    <div class="recommend_list">
      <router-link
        tag="div"
        :to="'/detail/goods/'+item.target_id"
        class="recommend_list-item"
        v-for="item in recommend"
        :key="item.target_id"
        :data-id="item.target_id"
      >
        <div>
          <img :src="item.image" />
        </div>
        <div class="goodsName">{{item.title}}</div>
        <div class="price">
          <span>￥{{item.vip_price}}/{{item.volume}}盒子</span>
          <span>+</span>
        </div>
      </router-link>
    </div>
  </scroll>
</template>

<script>
export default {
  name: "RecommendList",
  props: {
    recommend: {
      type: Array
    }
  }
};
</script>


<style>
.recommend_list {
  width: max-content;
  height: 3.4rem;
  display: flex;
}

.recommend_list > .recommend_list-item {
  width: 2.24rem;
  height: 3.4rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.16rem 0.3rem 0.16rem;
}

.recommend_list > .recommend_list-item img {
  width: 1.92rem;
  height: 1.92rem;
}

.recommend_list-item .goodsName {
  width: 100%;
  color: #3a3a3a;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.24rem;
}

.recommend_list-item .price {
  color: #ff8000;
  display: flex;
}

.recommend_list-item .price > span:nth-child(2) {
  display: block;
  width: 0.38rem;
  height: 0.38rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.38rem;
  font-size: 0.42rem;
}
</style>