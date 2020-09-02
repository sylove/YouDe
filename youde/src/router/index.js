import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Classify from '../views/Classify'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
import Search from '../views/Search'
import GlobalBuy from '../views/subpage/GlobalBuy'
import Detail from '../views/detail/Detail'
import List from '../views/subpage/List'
import ClassifyList from '../views/classifylist/ClassifyList'
import ClassifyCover from '../views/classifylist/ClassCover'

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
  {
    path:'/search',
    component:Search,
  },
  {
    path:'/globalBuy',
    component:GlobalBuy
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail
  },
  {
    path:'/list/:siteId/:secondCategoryId',
    name:'list',
    component:List
  },
  {
    path:'/classifylist:siteId/:thridCategoryId/:name',
    name:'classifylist',
    component:ClassifyList
  },
  {
    path:'/aa',
    component:ClassifyCover
  }
  
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
