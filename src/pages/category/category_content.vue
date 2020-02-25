<template>
   <div class="category_content">
            <div>新鲜水果</div>
            <div class="goods_list">
                <ul>
                    <li>
                        <img src="https://imgjd6.fruitday.com/images/2018-11-13/46034f567b4f08768bdc7afd0f994c30.jpg" alt="">
                        <span>苹果</span>
                    </li>
                    <li>
                        <img src="https://imgjd6.fruitday.com/images/2018-11-13/46034f567b4f08768bdc7afd0f994c30.jpg" alt="">
                        <span>苹果</span>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style>
  .category_container .category_content{
    padding:.2rem;
    background: #fff;
    width:5.9rem;
    margin-left:1.6rem;
    
}
.category_container .category_content>div:nth-child(1){
    text-align: center;
    font-size: .24rem;
}
.category_container .category_content img{
    width:1.415rem;
    height: 1.415rem;
}

.category_container .category_content ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
}

.category_container .category_content ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.category_container .category_content .goods_list{
    height: 100%;
    background: #fff;
}  
</style>