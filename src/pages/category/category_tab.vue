<template>
   <div class="category_tab">
            <ul>
                <li>新鲜水果</li>
                <li>新鲜水果</li>
            </ul>
        </div>
</template>

<script>
export default {
    
}
</script>

<style>
  .category_container .category_tab{
    width:1.6rem;
    flex-shrink: 0;
    position: fixed;
}
.category_container .category_tab>ul{
    width:100%;
    background: #f5f5f5;
}
.category_container .category_tab>ul li{
    width:1.6rem;
    text-align: center;
    line-height: .92rem;
    font-size: .26rem;
}

.category_container .category_tab ul .active{
    background: #fff;
    color: #65a032;
}  
</style>