<template>
    <div class="detail_page">
        <div id="good-comment" class="tab-box comment">
            <!-- 评分 -->
            <div id="good-comment-star">
                <div class="comment-level-item">
                    <div><span>100%</span><span>好评</span></div>
                    <div>
                        <div> <span class="pull-left">口感</span> <img
                                src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                        </div>
                        <div> <span class="pull-left">颜值</span> <img
                                src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                            <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" alt="">
                        </div>
                    </div>
                </div>
                <!-- 选项卡 -->
                <div class="comment-tab-menu">
                    <ul>
                        <v-touch tag="li" :class="show?'active':''" @tap="handleToggle(1)">评价 4</v-touch>
                        <v-touch tag="li" :class="show?'':'active'" @tap="handleToggle('')">晒图 2</v-touch>
                    </ul>
                </div>
            </div>
             <scroll ref="scroll">
                <CommentList :commentsList="commentsList"/>
             </scroll>
        </div>
        <AddCart/>
    </div>
</template>

<script>
import CommentList from "@components/detail/commentList"
import AddCart from "@components/detail/addCart"
import {detailsCommentListApi} from "@api/request.js";
export default {
    components:{
        CommentList,
        AddCart
    },
    data(){
        return {
            product_id:"",
            curr_page:1,
            show:1,
            commentsList:[]
        }
    },
    watch:{
        commentsList:{
            handler(){
                if(this.curr_page !=1){
                    this.$refs.scroll.handlefinishPullUp();
                }
            },
            deep:true
        }
    },
    created() {
        this.product_id = localStorage.getItem("product_id")
        var obj = {
               product_id: this.product_id,
               curr_page:this.curr_page,
               show:this.show
           }
        this.getHandleCommentList(obj);
    },
    methods:{
       async getHandleCommentList(obj){
           let data = await detailsCommentListApi(obj);
           this.commentsList = data.data;
        },
        handleToggle(show){
            this.show = show;
            if(this.show){
                var obj = {
                    product_id: this.product_id,
                    curr_page:this.curr_page,
                    show:this.show,
                  
                }
            }else{
                var obj = {
                    product_id: this.product_id,
                    curr_page:this.curr_page,
                    show:this.show,
                    comment_type:1
                }
            }
            
            this.getHandleCommentList(obj);
        },
       async handleMoer(){
            this.curr_page++;
            var obj = {
                product_id: this.product_id,
                curr_page:this.curr_page,
                show:this.show,   
            }
            let data = await detailsCommentListApi(obj);
            this.commentsList = [...this.commentsList,...data.data];
        }
    },
    mounted() {
        //上拉加载更多
        this.$refs.scroll.handlepullingUp(this.handleMoer);
    },
}
</script>

<style>
#good-comment{
    height: 100%;
}
#good-comment-star{
    width:100%;
    height: 3.44rem;
    background: #fff;
    position: fixed;
    left:0;
    top:.9rem;
    z-index:9;
}
.wrapper{
    padding-top:3.44rem;
}
#good-comment-star .comment-level-item{
    width:100%;
    height:1.92rem;
    border-bottom: 0.01rem solid #ccc;
    display: flex;
    align-items: center;
    padding: .4rem .2rem;
}
#good-comment-star .comment-level-item>div:nth-child(1){
    height: 1.12rem;
    width: 1.12rem;
    border-radius: 50%;
    background:#ff8000 ;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: .4rem;
    font-size: .34rem;
}
#good-comment-star img{
    height: .4rem;
    width: .4rem;
}
#good-comment-star .comment-level-item>div:nth-child(2){
    display: flex;
    flex-direction: column;
}
.comment-level-item>div:nth-child(2) div{
    display: flex;
    margin-bottom: .2rem;
}
.comment-level-item>div:nth-child(2) div img{
    margin-left:.3rem;
}

/* 选选卡  */
.comment-tab-menu{
    width:100%;
    height:1.52rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.01rem solid #ccc;
}
.comment-tab-menu ul{
    width:4.44rem;
    height: .68rem;
    display: flex;
    border: .01rem solid #ff8000;
    border-radius: 0.06rem;
}
.comment-tab-menu ul li{
    width:100%;
    height: 100%;
    text-align: center;
    line-height: .68rem;
    color: #ff8000;
    font-size: .3rem;

}
.comment-tab-menu ul .active{
    color: #fff;
    background:#ff8000 ;
}
</style>