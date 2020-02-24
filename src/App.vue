<template>
  <div id="app">
   
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from "@components/tabbar"
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>

<style>
.page{
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  right: 0;
  padding-bottom: 1.2rem;
}
</style>
