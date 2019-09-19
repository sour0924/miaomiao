import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;//引入axios

//全局过滤图片数据
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

//全局组件-滑动
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

//全局组件-loading
import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
