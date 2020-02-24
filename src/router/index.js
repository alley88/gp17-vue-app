import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "./home"
import classify from "./classify"
import cart from "./cart"
import mine from "./mine"
import search from "./search"
import searchList from "./searchList"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  home,
  classify,
  cart,
  mine,
  search,
  searchList
]

const router = new VueRouter({
  routes
})

export default router
