
export interface RouterItem {
  title?: string;
  path: string;
  icon?: string;
  isMenu?: boolean;
  subs?: RouterItem[];
}



export const routes: RouterItem[] = [
  {
    title: '主页',
    icon: '',
    path: '/home',
    isMenu: true
  },
  {
    path: '/gaode',
    title: '高德',
    icon: '',
    isMenu: true,
  },
  {
    path: '/threeD',
    title: '3D视图',
    icon: '',
    isMenu: true,
    subs: [
      {
        path: '/threeD/demo1',
        title: 'ThreeJs-demo1',
        isMenu: true,
        icon: '',
      },
      {
        path: '/threeD/demo2',
        title: 'ThreeD-demo2',
        isMenu: true,
        icon: '',
      },
      {
        path: '/threeD/demo3',
        title: 'ThingJs-demo3',
        icon: '',
        isMenu: true,
      },
      {
        path: '/threeD/demo4',
        title: 'ThingJs-demo4',
        isMenu: true,
        icon: '',
      }
    ]
  },
  {
    path: '/faceDetect',
    title: '人脸定位',
    icon: '',
    isMenu: true
  }
]

export default routes;