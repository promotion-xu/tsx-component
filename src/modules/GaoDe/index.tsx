
import { Component, Vue } from 'vue-property-decorator';

import './index.scss';
const icon = require('@/assets/images/map/camera.png')


@Component({})
export default class GaoDe extends Vue {

  render() {
    return (
      <div class="gaode">
        <div id="gaode__container" style={{ width: '100%', height: '100%' }}></div>
        <div class="video"
          style={{ display: 'none' }}
        >

        </div>
      </div>

    );
  }

  mounted() {
    // let map =  new AMap.Map('gaode__container');
    // var mysubway = subway("gaode__container", {easy: 1});
    let map = new AMap.Map('gaode__container', {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 20
    });

    let markerArr = [[116.39, 39.9], [116.4, 40], [116.41, 40]]
    // for (var i = 0; i < markerArr.length - 1; i++) {
    //   let marker = new AMap.Marker({
    //     position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    //     title: '北京',
    //     icon: icon
    //   })
    // }

   
    

  }

  clickMarker(markerArr: any) {
    markerArr.forEach((v: any, i: number) => {
      v.on('click', this.showInfoM)
    })
  }

  showInfoM(e: any) {
    var text = '您在 [ ' + e.lnglat.getLng() + ',' + e.lnglat.getLat() + ' ] 的位置点击了marker！';
  }
}
