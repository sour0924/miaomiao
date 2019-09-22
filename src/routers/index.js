/**主路由 */
import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //默认路径
  //base: process.env.BASE_URL,
  base: 'miaomiao',//改为/项目名
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    //重定向
    {
        path : '/*',
        redirect : '/movie'
    }
  ]
})
