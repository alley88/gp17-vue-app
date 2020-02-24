<template>
<div>
     <SearchHeader/>
     <div class="searchlist">
        <div class="searchlist-goodsItem" v-for="(item) in list" :key="item.id">
            <div class="goodsPic">
                <img v-lazy="item.photo"/>
            </div>
            <div class="goodsDes">
               <div>{{item.product_name}}</div>
               <div>{{item.product_desc}}</div>
               <div>{{item.volume}}</div>
               <div>
                   <div>￥</div>
                   <div>{{item.price}}</div>
                   <div>明日达</div>
               </div> 
               <div  v-if="item.stock != 0">+</div>
            </div>
            <img class="tag-img" src="https://wap.fruitday.com/content/images/giveaway/tag-a8884d64d5.png" v-if="item.stock == 0"/>
        </div>
    </div>
</div>
    
</template>

<script>
import SearchHeader from "../search/header.vue"
import {searchListtData} from "../search/index.js"
export default {
    data(){
        return {
            list:[]
        }
    },
    name:"SearchList",
    props:["keyword"],
    components:{
        SearchHeader
    },
    watch: {
        keyword:{
           async handler(newVal){
               let data = await searchListtData(newVal);
               this.list = data.data;
            },
            immediate:true
        }
    },  
}
</script>

<style>
 
.searchlist-goodsItem{
    padding:.2rem;
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: .01rem solid #ccc;
    position:relative;
}
.searchlist-goodsItem .goodsPic,.searchlist-goodsItem .goodsPic img{
    width:2.1rem;
    height: 2.1rem;
    flex-shrink: 0;
}
.searchlist-goodsItem .goodsPic{
    margin-right: .2rem;
}
.goodsDes{
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
}
.goodsDes>div:nth-child(1){
    color:#3a3a3a;
    font-size: .3rem;
}
.goodsDes>div:nth-child(2){
    color: #878787;
    font-size: .26rem;
}

.goodsDes>div:nth-child(3){
    color: #878787;
    font-size: .26rem;
    margin-top: .4rem;
}
.goodsDes>div:nth-child(4){
    display: flex;
    margin-top: .2rem;
}
.goodsDes>div:nth-child(4) div:nth-child(1){
    font-size: .25rem;
    color: #ff7e05;
}
.goodsDes>div:nth-child(4) div:nth-child(2){
    font-size: .32rem;
    color: #ff7e05;

}
.goodsDes>div:nth-child(4) div:nth-child(3){
    font-size: .2rem;
    color: #fff;
    width:.8rem;
    height: .36rem;
    background: #ff7e05;
    text-align: center;
    line-height: .36rem;
    margin-left: .2rem;
}
.goodsDes>div:nth-child(5){
    position: absolute;
    right: 0;
    bottom: 0;
    font-size:.4rem;
    width:.4rem;
    height: .4rem;
    border-radius: 50%;
    border:1px solid #ccc;
    color: #ff7e05;
    text-align: center;
    line-height: .4rem;
}   

.tag-img{
    position:absolute;
    right:0;
    bottom:0;
    width:1.48rem;
    height:1.4rem;
}
</style>