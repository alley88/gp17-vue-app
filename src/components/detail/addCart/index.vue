<template>
   <div class="cart">
      <div>
        <i class="iconfont">&#xe65c;</i>
      </div>
      <div>
        <span>明日达</span>
        <span>加入购物车</span>
      </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style>
    /* cart */

.cart {
  width: 100%;
  height: 0.9rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #fff;
  box-shadow: 0 -0.02rem 0.02rem 0 rgba(0, 0, 0, 0.15);
}
.cart > div:nth-child(1) {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #65a032;
  left: 0.2rem;
  text-align: center;
  line-height: 1rem;
  color: #fff;
  top: -0.15rem;
}
.cart > div:nth-child(1) i {
  font-size: 0.6rem;
  color: #fff;
}
.cart > div:nth-child(2) {
  background: #ff8000;
  height: 0.9rem;
  display: flex;
  width: 3.6rem;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.cart > div:nth-child(2) span:nth-child(1) {
  margin-right: 0.2rem;
  font-size: 0.24rem;
}

.cart > div:nth-child(2) span:nth-child(2) {
  font-size: 0.34rem;
}
</style>