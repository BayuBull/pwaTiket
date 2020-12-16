import Vue from 'vue'
import VueRouter from 'vue-router'
import pesantiket from '../views/Home.vue'
import loginPage from '../views/Auth/loginPage'
import registerPage from '../views/Auth/registerPage'
import edituser from '../views/User/editUserPage'
import tiket from '../views/User/tiketPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage
  },
  {
    path:'/pesantiket',
    name:'tiket',
    component : pesantiket
  },
  {
    path:'/register',
    name:'Register',
    component : registerPage
  },
  {
    path:'/edituser',
    name:'edituser',
    component : edituser
  },
  {
    path:'/tiket',
    name:'tiket',
    component : tiket
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
