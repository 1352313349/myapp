import Vue from 'vue'
import VueRouter from 'vue-router'   //引入组件
import Home from '../views/Home.vue'
import Text from "../views/Text.vue"

Vue.use(VueRouter) //vuerouter是一个插件，要用的时候需要use一下

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')  //组件懒加载
  },
  {path:"/text",name:"Text",component:Text}
]

const router = new VueRouter({
  routes
})

export default router
