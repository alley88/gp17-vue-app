<template>
    <div>
        <detailHeader/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
    
</style>