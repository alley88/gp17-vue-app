<template>
  <div class="category">
    <div class="category_header">
      <div>
        <i class="iconfont">&#xe60b;</i>
        <span>奇异果</span>
      </div>
    </div>
     <div class="category_container">
         <CategoryTab/>
         <CategoryContent/>
     </div>
    <!-- tab -->

    <!-- container -->
  </div>
</template>

<script>
import CategoryTab from "./category_tab"
import CategoryContent from "./category_content"

export default {
    created(){
      
    },
    components:{
        CategoryTab,
        CategoryContent
    }
};
</script>

<style>
.category{
    width:100%;
    height: 100%;
}
.category_header{
    width:100%;
    height:.92rem ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: fixed;
    z-index: 10;
}
.category_header>div{
    width:96%;
    height: .58rem;
    background:#eee;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #878787;
}
.category_header>div i{
    font-size: .4rem;
    margin-right: .2rem;
}
.category_container{
    padding-top: .98rem;
    width:100%;
    display: flex;
    position: relative;
    height: 100%;
}
</style>