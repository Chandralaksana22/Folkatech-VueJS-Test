import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import DetailPage from '../views/DetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
    props:true
  },
  {
    path: '/DetailPage/:id',
    name: 'DetailPage',
    component: DetailPage,
    props:true
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: RegisterPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
