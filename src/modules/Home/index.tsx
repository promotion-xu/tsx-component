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

const title = window.config.title;
const subwayName = window.config.subwayName;
const roll = window.config.roll;
const isHQ = subwayName === '虹桥火车站' ? 'hq' : 'rm'

const stationPieLegendData = ['入站人数', '出站人数'];

interface ITarget {
  enter?: number;
  leave?: number;
  total?: number;
  exits?: object;
  floors?: object;
  hourStats?: object;
  urls?: any;
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
  floorPieSeriesData = [];

  floorPieLegendData = ['B2层', 'B1层', '1层', '2层'];

  BarYAxis: string[] = [];
  BarSeriesData: number[] = [];

  visible: boolean = false;
  bigImgUrl: string = '';

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
                  {this.floorPieSeriesData.length === 0 ? <span class="noContent">暂无推送数据</span> :

                    <PieCharts
                      legendData={this.floorPieLegendData}
                      seriesData={this.floorPieSeriesData}
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
                class={`subway__content__map__${isHQ}`}
              >
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

  }

  connect() {
    let socket = new SockJS('http://10.11.198.195:8001/ws/stomp');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({
      "userId": "1",
      "onDisconnectTopic": "/topic",
      "clientId": "1"
    }, (frame: any) => {
      this.subscribe();
    });
  }

  showBigImg(url: string) {
    Modal.info({
      // title: 'This is a notification message',
      content: (
        <div>
          <img src={url} alt=""/>
        </div>
      ),
      onOk() {},
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
      const { floors, exits, hourStats, enter, leave, urls } = message;
      // 进站出站统计
      this.stationPieSeriesData = [
        { value: enter, name: '入站人数' },
        { value: leave, name: '出站人数' },
      ];

      // 楼层统计
      this.floorPieSeriesData = [];
      this.floorPieLegendData = [];
      Object.keys(floors).forEach((v) => {
        this.floorPieSeriesData.push({ value: floors[v], name: v });
        this.floorPieLegendData.push(v);
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
      Object.keys(exits).forEach((v) => {
        this.BarYAxis.push(v);
        this.BarSeriesData.push(exits[v])
      })

      // 抓拍图片统计
      this.imageList = [];
      this.imageList = this.imageList.concat(urls);
      this.imageList.sort(() => {
        return 0.5 - Math.random();
      })
    });
  }

}