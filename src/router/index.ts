import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/index.vue'
// 在vue-router新版本中要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home
    }
  ]
})