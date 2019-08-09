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
      {
        path: 'demo3',
        title: 'ThingJs-demo3',
        name: 'ThingJS-demo3',
        isMenu: true,
        component: () => import('@/modules/ThreeD/ThingJsDemo3')
      }
    ]
  },
  {
    path: '/gaode',
    name: 'gaode',
    title: '高德',
    icon: '',
    isMenu: true,
    component: () => import('@/modules/GaoDe')
  },

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