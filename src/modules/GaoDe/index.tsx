
import { Component, Vue } from 'vue-property-decorator';

import './index.scss';

@Component({})
export default class GaoDe extends Vue {

  render() {
    return (
      <div class="gaode">
        <div id="gaode__container" style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  }

  mounted() {
    // let map =  new AMap.Map('gaode__container');
    // var map = new AMap.Map('gaode__container', {
    //   zoom: 1,  //级别
    //   center: [116.397428, 39.90923], //中心点坐标
    //   viewMode: '3D', //使用3D视图
    //   pitch: 75, // 地图俯仰角度，有效范围 0 度- 83 度
    // });
    var mysubway = subway("gaode__container", {easy: 1});
    
  }

}
