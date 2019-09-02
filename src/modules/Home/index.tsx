import { Component, Vue } from 'vue-property-decorator';
import LineCharts from '@/components/Charts/LineCharts';
import PieCharts from '@/components/Charts/PieCharts';
import BarCharts from '@/components/Charts/BarCharts';
import Counter from '@/modules/Home/Counter';
import {
  Modal
} from 'ant-design-vue';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './index.scss';

const title = (window as MyWindow).config.title;
const subwayName = (window as MyWindow).config.subwayName;
const roll = (window as MyWindow).config.roll;
const host = (window as MyWindow).config.host;
const map = (window as MyWindow).config.map;
const isHQ = subwayName === '虹桥火车站' ? 'hq' : 'zs'
const icon = require('@/assets/images/map/camera.png');


const stationPieLegendData = ['入站人数', '出站人数'];

interface ITarget {
  enter?: number;
  leave?: number;
  total?: number;
  exits?: object;
  floors?: object;
  hourStats?: object;
  urls?: any;
  captures?: any;
}


@Component({
  components: {
    'a-modal': Modal
  },
  watch: {
    imageList(value: any) {
      if (value.length > 7) {
        this.imageList = this.imageList.slice(0, 7)
      }
    }
  }
})
export default class Home extends Vue {
  xData = [];
  seriesData = [];
  legendData = ['实时统计'];
  imageList: string[] = [];
  stompClient: any;
  wsData: ITarget = {};
  stationPieSeriesData: any = [];
  floorSeriesData = [];

  floorLegendData = ['B2层', 'B1层', '1层', '2层'];

  BarYAxis: string[] = [];
  BarSeriesData: number[] = [];

  visible: boolean = false;
  bigImgUrl: string = '';

  captures: any[] = [];
  map: any;
  markerArr: any[] = [];

  markersArr: any[] = [];

  render() {
    return (
      <div class="subway">
        <div class="subway__header">
          <img src={require('@/assets/images/home/subway__logo.png')} alt="" />
          <span class="animated flash">{title}</span>
        </div>

        <div class="subway__content">
          <div class="subway__content__left">
            <div class="subway__content__flow">
              <div class="subway__content__card">
                <div class="title">
                  <span class="iconfont"></span> 实时概况{'&'}进出站人数
                </div>
                <div class="content">
                  {this.stationPieSeriesData.length === 0 ? <span class="noContent">暂无推送数据</span> :
                    <PieCharts
                      legendData={stationPieLegendData}
                      seriesData={this.stationPieSeriesData}
                      itemGap={50}
                    />
                  }

                </div>
              </div>
            </div>
            <div class="subway__content__statistics">
              <div class="subway__content__card">
                <div class="title">
                  <span class="iconfont iconfont1"></span> 楼层归档数量统计
                </div>
                <div class="content">
                  {this.floorSeriesData.length === 0 ? <span class="noContent">暂无推送数据</span> :
                    <BarCharts
                      xAxis={this.floorLegendData}
                      seriesData={this.floorSeriesData}
                      type={'vertical'}
                    />
                  }
                </div>
              </div>
            </div>
          </div>

          <div class="subway__content__middle">
            <div class="subway__content__header">
              <p class="title">
                <img src={require('@/assets/images/home/header.png')} alt="" />
                {`${subwayName} 抓拍总数:`}
              </p>
              <div class="count">
                <Counter upwards={roll === 'up'} maxDigits={10} value={Math.min(this.wsData.total, Math.pow(10, 10) - 1)} />
              </div>
            </div>
            <div class="subway__content__wrapper">
              <div
                class={`subway__content__map subway__content__map__${isHQ}`}
              >
                {map.net === 'online' ?
                  <div class="gaode">
                    <div id="gaode__container">
                    </div>
                  </div>
                  :
                  <div class="subway__content__map__markers">
                    {this.markersArr.length &&
                      this.markersArr.map((item, index) => {
                        return (
                          <div
                            class="subway__content__map__marker"
                            style={{
                              left: item.left + 'rem',
                              top: item.top + 'rem',

                            }}
                          >
                            <img
                              src={require('@/assets/images/map/marker.png')}

                            />
                            <span class="enter">{index + 1}</span>
                            {item[`${index + 1}号口`]}
                          </div>

                        )
                      })
                    }
                  </div>
                }

              </div>
              <div class="subway__content__capture">
                <span class="subway__content__realTime">实时抓拍</span>
                <transition-group
                  name="capture-list" tag="ul"
                  class="subway__content__captureList"
                >
                  {this.imageList.map((face: string, index: number) => {
                    return (
                      <li class="subway__content__listItem fl" key={index}>
                        <img onClick={() => this.showBigImg(face.bigStoragePath)} src={face.snapStoragePath} alt="" />
                      </li>
                    )
                  })}
                </transition-group>
              </div>
            </div>
          </div>

          <div class="subway__content__right">
            <div class="subway__content__flow">
              <div class="subway__content__card">
                <div class="title">
                  <span class="iconfont iconfont1"></span> 实时统计客流量
                </div>
                <div class="content">
                  {this.seriesData.length === 0 ? <span class="noContent">暂无推送数据</span> :
                    <LineCharts
                      xData={this.xData}
                      legendData={this.legendData}
                      seriesData={this.seriesData}
                    />
                  }

                </div>
              </div>
            </div>
            <div class="subway__content__statistics">
              <div class="subway__content__card">
                <div class="title">
                  <span class="iconfont"></span> 抓拍区域统计
                </div>
                <div class="content">
                  {
                    this.seriesData.length === 0 ? <span class="noContent">暂无推送数据</span> :
                      <BarCharts
                        yAxis={this.BarYAxis}
                        seriesData={this.BarSeriesData}
                      />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  created() {
    this.connect();
  }

  mounted() {
    if (map.net === 'online') {
      this.initMap();
    }
  }

  connect() {
    let socket = new SockJS(host);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({
      "userId": "1",
      "onDisconnectTopic": "/topic",
      "clientId": "1"
    }, (frame: any) => {
      this.subscribe();
    });
  }

  initMap() {
    this.map = new AMap.Map('gaode__container', {
      resizeEnable: true,
      center: map.mapCenter,
      zoom: 20
    });
  }

  addMarker() {
    this.map && this.map.remove(this.markerArr);
    this.markerArr = this.captures.map((v: any, i: number) => {
      return (
        new AMap.Marker({
          position: new AMap.LngLat(v.longitude, v.latitude),
          // title: '',
          content: '' +
            `<div class="custom-content-marker"><img src="${icon}">${v.count}</div>`,
          icon: icon
        })
      )
    })
    this.map && this.map.add(this.markerArr);
  }

  showBigImg(url: string) {
    Modal.info({
      // title: 'This is a notification message',
      content: (
        <div>
          <img src={url} alt="" />
        </div>
      ),
      onOk() { },
    });
  }

  handleOk() {
    this.visible = false;
  }

  handleCancel() {
    this.visible = false;
  }

  subscribe() {
    this.stompClient.subscribe("/topic/statistics", (data: any) => {
      let message = JSON.parse(data.body);
      this.wsData = message;
      const { floors, exits, hourStats, enter, leave, urls, captures } = message;

      // 进站出站统计
      this.stationPieSeriesData = [
        { value: enter, name: '入站人数' },
        { value: leave, name: '出站人数' },
      ];

      // 楼层统计
      this.floorSeriesData = [];
      this.floorLegendData = [];
      Object.keys(floors).forEach((v) => {
        this.floorSeriesData.push({ value: floors[v], name: v });
        this.floorLegendData.push(v);
      })
      
      // 实时统计
      let staticsData: any = [];
      this.seriesData = [];
      this.xData = [];
      Object.keys(hourStats).forEach((v) => {
        this.xData.push(v);
        staticsData.push(hourStats[v])
      })
      this.seriesData.push({ name: '实时统计', data: staticsData })
      // 抓拍区域统计
      this.BarYAxis = [];
      this.BarSeriesData = [];
      this.markersArr = [];
      Object.keys(exits).forEach((v, i) => {
        this.BarYAxis.push(v);
        this.BarSeriesData.push(exits[v]);

        let obj: any = {};
        obj[v] = exits[v];
        this.markersArr.push(obj);
      })
      
      if (isHQ === 'hq') {
        this.markersArr = this.markersArr.slice(0, 4);
        this.markersArr[0]['left'] = 6.5;
        this.markersArr[0]['top'] = 2.2;
        this.markersArr[1]['left'] = 6.5;
        this.markersArr[1]['top'] = 2.8;
        this.markersArr[2]['left'] = 1.2;
        this.markersArr[2]['top'] = 1.9;
        this.markersArr[3]['left'] = 1;
        this.markersArr[3]['top'] = 2.6;
      } else {
        this.markersArr[0]['left'] = 1;
        this.markersArr[0]['top'] = 2;
        this.markersArr[1]['left'] = 1.8;
        this.markersArr[1]['top'] = 2;
        this.markersArr[2]['left'] = 1.2;
        this.markersArr[2]['top'] = 1.5;
        this.markersArr[3]['left'] = 1;
        this.markersArr[3]['top'] = 2.6;
        this.markersArr[4]['left'] = 6.4;
        this.markersArr[4]['top'] = 1.4;
        this.markersArr[5]['left'] = 4.3;
        this.markersArr[5]['top'] = 2.2;
        this.markersArr[6]['left'] = 3.2;
        this.markersArr[6]['top'] = 2.5;
        this.markersArr[7]['left'] = 1.7;
        this.markersArr[7]['top'] = 2.8;
        this.markersArr[8]['left'] = 2.8;
        this.markersArr[8]['top'] = 2.8;
        // this.markersArr[9]['left'] = 2.9;
        // this.markersArr[9]['top'] = 2.9;
        // this.markersArr[10]['left'] = 3;
        // this.markersArr[10]['top'] = 3;
      }


      // left:2~5rem    top: 2~4rem

      // [{1号口: 548, left: 2, top: 3,}, {}, {}, {}, {}]


      // 抓拍图片统计
      this.imageList = [];
      this.imageList = this.imageList.concat(urls);
      this.imageList.sort(() => {
        return 0.5 - Math.random();
      })

      // 摄像机抓拍数据统计
      this.captures = captures;
      this.addMarker();
    });
  }

}