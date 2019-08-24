import { Component, Vue } from 'vue-property-decorator';
import LineCharts from '@/components/Charts/LineCharts';
import PieCharts from '@/components/Charts/PieCharts';
import BarCharts from '@/components/Charts/BarCharts';
import Counter from '@/modules/Home/Counter';
import './index.scss';

const title = window.config.title;
const subwayName = window.config.subwayName;
const roll = window.config.roll;
const isHQ = subwayName === '虹桥火车站' ? 'hq' : 'rm'

const stationPieSeriesData = [
  { value: 3456, name: '入站人数' },
  { value: 2344, name: '出站人数' },
];
const stationPieLegendData = ['入站人数', '出站人数'];

const floorPieSeriesData = [
  { value: 12, name: 'B2层' },
  { value: 87, name: 'B1层' },
  { value: 87, name: '1层' },
  { value: 47, name: '2层' },
];
const floorPieLegendData = ['B2层', 'B1层', '1层', '2层'];

const BarYAxis = ['1号口', '2号口', '3号口', '4号口', '5号口', '6号口', '7号口'];
const BarSeriesData = [10000, 20000, 30000, 20000, 25000, 30000, 18000]

@Component({
  watch: {
    imageList(value: any) {
      if(value.length > 7) {
        this.imageList = this.imageList.slice(0, 7)
      }
    }
  }
})
export default class Home extends Vue {
  url: string = window.config.subwayName === '虹桥火车站' ? '../../assets/images/home/hongqiao__station.png' : '../../assets/images/home/peopleGroup.png'
  xData = ['8h', '9h', '10h', '11h', '12h', '13h', '14h']
  seriesData = [
    {
      name: '实时统计',
      data: [50, 2, 3, 4, 5, 6, 7]
    }
  ];
  legendData = ['实时统计'];
  imageList: string[] = [];


  render() {
    return (
      <div class="subway">
        <div class="subway__header">
          <img src={require('@/assets/images/home/subway__logo.png')} alt="" />
          {title}
        </div>

        <div class="subway__content">
          <div class="subway__content__left">
            <div class="subway__content__flow">
              <div class="subway__content__card">
                <div class="title">
                  <img src={require('@/assets/images/home/square.png')} alt="" /> 实时概况{'&'}进出站人数
                </div>
                <div class="content">
                  <PieCharts
                    legendData={stationPieLegendData}
                    seriesData={stationPieSeriesData}
                  />
                </div>
              </div>
            </div>
            <div class="subway__content__statistics">
              <div class="subway__content__card">
                <div class="title">
                  <img src={require('@/assets/images/home/square.png')} alt="" /> 楼层归档数量统计
                </div>
                <div class="content">
                  <PieCharts
                    legendData={floorPieLegendData}
                    seriesData={floorPieSeriesData}
                  />
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
                <Counter upwards={roll === 'up'} maxDigits={10} value={Math.min(3892483, Math.pow(10, 10) - 1)} />
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
                        <img src={face} alt="" />
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
                  <img src={require('@/assets/images/home/square.png')} alt="" /> 实时统计客流量
                </div>
                <div class="content">
                  <LineCharts
                    xData={this.xData}
                    legendData={this.legendData}
                    seriesData={this.seriesData}
                  />
                </div>
              </div>
            </div>
            <div class="subway__content__statistics">
              <div class="subway__content__card">
                <div class="title">
                  <img src={require('@/assets/images/home/square.png')} alt="" /> 抓拍区域统计
                </div>
                <div class="content">
                  <BarCharts
                    yAxis={BarYAxis}
                    seriesData={BarSeriesData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  created() {
    
  }
  
  mounted() {
    setInterval(() => {
      this.imageList.unshift('http://10.5.6.31:30080/components/osg-default/_/video_face_cropped/20190824-f372991e-0a580ae00018-0000a318-00001bb0')
    }, 1000)
    
  }
}