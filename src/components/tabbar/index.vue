<template>
    <div class="tabbar">
        <ul>
            <router-link
            v-for="(item,index) in tabs" :key="index"
            :to="item.path"
            tag="li"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            tabs:[
                {
                    path:"/home",
                    icon:"&#xe65f;",
                    text:"首页"
                },
                {
                    path:"/classify",
                    icon:"&#xe63f;",
                    text:"分类"
                },
                {
                    path:"/cart",
                    icon:"&#xe65c;",
                    text:"购物车"
                },
                {
                    path:"/mine",
                    icon:"&#xe639;",
                    text:"我的"
                }
            ]
        }
    }
}
</script>

<style>
   .tabbar{
       width:100%;
       height: 1.2rem;
       position: fixed;
       left: 0;
       bottom: 0;
       background: #fff;
   } 

   .tabbar ul{
       width:100%;
       height: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
   }

   .tabbar ul li{
       width:100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       color:#333;
   }
    .tabbar ul .router-link-active{
        color:#c33;
    }
   .tabbar ul li i{
       font-size:.44rem;
   }
   .tabbar ul li span{
       font-size:.3rem;
   }
</style>