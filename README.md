# 技术栈
- vuex
- axios
- vue-lazyload
- vue-router
- UI框架 -->vant
- vue-touch
- better-scroll
- ui组件封装
- JS组件封装
- vue-awesome-swiper 

> yarn add axios vant vue-touch@next better-scroll vue-awesome-swiper

# 项目环境
vue-cli@3



# better-scroll基本使用

**布局结构**
```html
<div class="wrapper">
    <div></div>
</div>
```

**注意细节：**
- 如果父元素设置better-scroll那么只会针对第一个子元素实现滚动
- 如果父元素使用了better-scroll那么后代元素中的固定定位都失效


**父组件如何访问子组件内部的方法**
>通过this.$refs.属性.方法


# 如果初始化的时候没有安装sass如何解决
cnpm install node-sass sass-loader -D