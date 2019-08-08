import Vue from 'vue'
import Router from 'vue-router'
import { RouterItem } from '@/interface';
Vue.use(Router)

export const dyRoutes: RouterItem[] = [
 
  {
    path: '/home',
    title: '主页',
    name: 'home',
    icon: '',
    component: () => import('@/modules/Home'),
    isMenu: true
  },
  {
    path: '/threeD',
    title: '3D视图',
    name: 'threeD',
    icon: '',
    component: () => import('@/modules/ThreeD'),
    isMenu: true,
    children: [
      {
        path: 'demo1',
        title: 'ThreeJs-demo1',
        name: 'demo1',
        isMenu: true,
        component: () => import('@/modules/ThreeD/ThreeDDemo1')
      },
      {
        path: 'demo2',
        title: 'ThreeD-demo2',
        name: 'demo2',
        isMenu: true,
        component: () => import('@/modules/ThreeD/ThreeDDemo2')
      },
    ]
  }
]

const baseRoute = [
  { 
    path: '/', 
    redirect: '/login', 
  },
  {
    path: '/login',
    name: 'login',
    icon: '',
    component: () => import('@/modules/Login'),
    isMenu: true
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: dyRoutes.concat(baseRoute)
})


export default router;