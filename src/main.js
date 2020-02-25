import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from "vue-touch";
import VueLazyload from 'vue-lazyload'
import "./common/components"
Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(VueLazyload, {
  preLoad: 1.1,
  error: './img/error.jpg',
  loading: './img/timg.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
