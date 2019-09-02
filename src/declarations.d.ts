

interface MyWindow extends Window {

  config: {
    title: string;
    host: string;
    subwayName: string;
    roll: string;
    map: {
      mapCenter: any;
      net: string;
    }
  }
}



declare module 'ant-design-vue/lib/locale-provider/zh_CN' {
  const zh_CN: any;
  export default zh_CN;
}