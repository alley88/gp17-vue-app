<template>
  <div class="city_body" ref="city_container">
    <scroll ref="scroll">
      <div>
        <!--热门城市-->
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_name" v-for="item in hotCity" :key="item.id">{{item.nm}}</div>
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" ref="city_list">
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <div class="city_title_letter">{{item.index}}</div>
            <div class="city_list_name">
              <div
                class="city_list_name_item"
                v-for="child in item.list"
                :key="child.id"
              >{{child.nm}}</div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <!--城市列表下标-->
    <div class="city_list_index">
      <v-touch
        class="index_item"
        v-for="(item,index) in cityList"
        :key="item.id"
        tag="div"
        @tap="handleTo(index)"
      >{{item.index}}</v-touch>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "City",
  created() {
    if (!localStorage.getItem("hotCity") || !localStorage.getItem("cityList")) {
      this.handleGetCityList();
    }
  },
  computed: {
    ...mapState({
      hotCity: state => state.hotCity,
      cityList: state => state.cityList
    })
  },
  methods: {
    ...mapActions({
      handleGetCityList: "handleGetCityList"
    }),
    handleTo(index) {
      var title = this.$refs.city_list.querySelectorAll(".city_title_letter")[
        index
      ];
      var t = title.offsetTop;
      //this.$refs.city_container.scrollTop = t;
      this.$refs.scroll.handleScrollTo(0,-t);
    }
  }
};
</script>

<style>
.city_body {
  background: #ebebeb;
  overflow: auto;
  height: 100%;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
}
</style>