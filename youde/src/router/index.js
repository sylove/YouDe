import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Classify from '../views/Classify'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
// import Footer from '../components/Footer'
import Search from '../views/Search'
import GlobalBuy from '../views/GlobalBuy'
// import InputSearch from '../components/InputSearch'
import Detail from '../views/subpage/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home,
  },
  {
    path:'/classify',
    component:Classify,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/mine',
    component:Mine,
  },
  // {
  //   path:'/input',
  //   component:InputSearch,
  // },
  {
    path:'/search',
    component:Search,
  },
  // {
  //   path:'/footer',
  //   component:Footer,
  // },
  {
    path:'/globalBuy',
    component:GlobalBuy
  },
  {
    path:'/detail',
    component:Detail
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
