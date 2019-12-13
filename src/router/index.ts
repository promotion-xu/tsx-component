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
    isMenu: true,
  },
  {
    path: '/threeD',
    title: '3D视图',
    name: 'threeD',
    icon: '',
    component: () => import('@/modules/ThreeD/ThingJsDemo3'),
    isMenu: true,
  },
  {
    path: '/threeJS',
    title: 'ThreeJS',
    name: 'threeJS',
    icon: '',
    component: () => import('@/modules/ThreeJs/ThreeJs-1'),
    isMenu: true,
  },
  {
    path: '/threeJS/threeJs-1',
    title: 'ThreeJS-1',
    name: 'threeJS-1',
    icon: '',
    component: () => import('@/modules/ThreeJs/ThreeJs-1'),
    isMenu: true,
  },
  {
    path: '/gaode',
    name: 'gaode',
    title: '高德',
    icon: '',
    isMenu: true,
    component: () => import('@/modules/GaoDe')
  },
  {
    path: '/threeD/demo1',
    title: 'ThreeJs-demo1',
    name: 'ThreeJs-demo1',
    isMenu: true,
    icon: '',
    component: () => import('@/modules/ThreeD/ThreeDDemo1')
  },
  {
    path: '/threeD/demo2',
    title: 'ThreeD-demo2',
    name: 'ThreeJs-demo2',
    isMenu: true,
    icon: '',
    component: () => import('@/modules/ThreeD/ThreeDDemo2')
  },
  {
    path: '/threeD/demo3',
    title: 'ThingJs-demo3',
    name: 'ThingJS-demo3',
    icon: '',
    isMenu: true,
    component: () => import('@/modules/ThreeD/ThingJsDemo3')
  },
  {
    path: '/threeD/demo4',
    title: 'ThingJs-demo4',
    name: 'ThingJs-demo4',
    isMenu: true,
    icon: '',
    component: () => import('@/modules/ThreeD/ThingJsDemo4')
  },
  {
    path: '/face/position',
    title: '人脸定位',
    isMenu: true,
    component: () => import('@/modules/Face/FacePosition')
  },
  {
    path: '/face/faceDrawing',
    title: '人脸标注',
    isMenu: true,
    component: () => import('@/modules/Face/FaceDrawing')
  },
  {
    path: '/face/faceDetection',
    title: '活体识别',
    isMenu: true,
    component: () => import('@/modules/Face/FaceDetection')
  },
  {
    path: '/ws',
    title: 'WebSocket',
    isMenu: true,
    component: () => import('@/modules/WebSocket')
  },
  {
    path: '/WebGL',
    title: 'WebGL',
    component: () => import('@/modules/WebGL')
  },
  {
    path: '/LivingCheck',
    title: '活体检测',
    component: () => import('@/modules/LivingCheck')
  },
  {
    path: '/Ht/1',
    title: 'HT FOR WEB',
    component: () => import('@/modules/Ht/Ht-1')
  }
]

const baseRoute = [
  { 
    path: '/', 
    redirect: '/home', 
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