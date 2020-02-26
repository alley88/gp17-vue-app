<template>
 
    <div class="detail_comment-list">
      <div class="comment_list-item" v-for="(item,index) in commentsList" :key="index">
        <div class="comment-info">
          <div>
            <div>
              <img :src="item.userface" />
            </div>
            <div>{{item.user_name}}}</div>
          </div>
          <div>{{item.time}}</div>
        </div>
        <div class="comment-level">
          <span>口感 {{item.star_eat}}</span>
          <span>颜值 {{item.star_show}}</span>
        </div>
        <div class="comment-msg">绿叶菜的餐桌必备 鲜嫩爽口</div>
        <div class="comment-img" v-show="item.images?item.images.length>0?true:false:''">
          <img :src="child" v-for="(child,idx) in item.images" :key="idx" />
        </div>
      </div>
      <div class="text-center">
        <span>查看全部评论</span>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    commentsList: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
.detail_comment-list{
    padding-top: 3.44rem;
}
/* 评论列表 */
.comment_list-item {
  padding: 0.3rem 0.2rem;
  background: #fff;
}
.comment_list-item .comment-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment_list-item .comment-info > div:nth-child(1) {
  display: flex;
  align-items: center;
  height: 0.72rem;
}
.comment_list-item .comment-info > div:nth-child(1) img {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  margin-right: 0.32rem;
}
.comment_list-item .comment-level {
  display: flex;
  align-items: center;
  height: 0.6rem;
}
.comment_list-item .comment-level span {
  margin-right: 0.6rem;
  color: #878787;
}
.comment_list-item .comment-msg {
  color: #333;
  font-size: 0.3rem;
}
.comment_list-item .comment-img {
  display: flex;
  height: 1.28rem;
  width: 100%;
  margin-top: 0.4rem;
}
.comment_list-item .comment-img img {
  width: 1.12rem;
  height: 1.12rem;
  margin-right: 0.2rem;
}
.text-center {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  margin-bottom: 0.9rem;
}
.text-center span {
  width: 2.08rem;
  height: 0.6rem;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.3rem;
  color: #333;
  border: 0.01rem solid #ccc;
}
</style>