<template>
    <div>
        <detailHeader/>
       
        <router-view></router-view>
      
    </div>
</template>

<script>
import detailHeader from "./header.vue";

export default {
    name:"detail",
    components:{
        detailHeader
    },
   
}
</script>

<style>
.detail_page{
    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    padding-top: .9rem;
}
</style>