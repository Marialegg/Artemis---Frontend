import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index-developer')
  },
  {
    path: '/index-developer',
    name: 'developer',
    component: () => import('../views/index-developer')
  },
  {
    path: '/venix-grids',
    name: 'venix-grids',
    component: () => import('../views/venix-grids')
  },
  {
    //path: '/venix-nft-detail/:token_series_id',
    path: '/venix-nft-detail',
    name: 'nft_detail',
    component: () => import('../views/venix-nft-detail')
  },
  {
    path: '/venix-404',
    name: 'venix-404',
    component: () => import('../views/venix-404')
  },  {
    path: '/venix-403',
    name: 'venix-403',
    component: () => import('../views/venix-403')
  },  {
    path: '/venix-500',
    name: 'venix-500',
    component: () => import('../views/venix-500')
  },
  {
    path: '/collection',
    //path: '/venix-nft-detail',
    name: 'collection',
    component: () => import('../views/collection')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
