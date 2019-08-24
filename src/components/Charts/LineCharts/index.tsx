
import { Component, Vue } from 'vue-property-decorator';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require("echarts/lib/component/legend");



@Component({
  props: {
    legendData: {
      required: true,
      type: Array,
      default() {
        return []
      }
    },
    xData: {
      required: true,
      type: Array,
      default() {
        return []
      }
    },
    seriesData: {
      required: true,
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    seriesData() {
      this.drawLine();
    }
  }
})
export default class LineCharts extends Vue {
  // 传入的数据格式
  // xData = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  // seriesData = [
  //   {
  //     name: 'xuzen',
  //     data: [50, 2, 3, 4, 5, 6, 7]
  //   },
  //   {
  //     name: 'thl',
  //     data: [1, 2, 3, 4, 105, 6, 7]
  //   },
  //   {
  //     name: 'xu',
  //     data: [1, 2, 300, 4, 5, 6, 7]
  //   },
  //   {
  //     name: 'xu',
  //     data: [1, 2, 3, 4, 5, 6, 700]
  //   }
  // ];
  // legendData = ['xuzen', 'thl', 'xu', 'xu']

  readonly legendData: any;
  readonly xData: any;
  readonly seriesData: any;

  myChart: any;


  render() {
    return (
      <div 
        style={{ width: '100%', height: '100%' }} 
        class="chart" 
        ref="chart"
      ></div>
    );
  }

  mounted() {
    this.drawLine();
  }

  

  drawLine() {
    var dom = this.$refs.chart;
    this.myChart = echarts.init(dom);
    const options: any = {
      color: ['#0293FF', '#1DC651'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        }
      },
      legend: {
        icon: 'rect',
        itemGap: 50,
        padding: [5, 20],
        itemWidth: 14,
        data: this.legendData,
        // selectedMode: false
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.xData
      },
      yAxis: {
        type: 'value'
      },
      series: this.seriesData.map((v: any) =>
        ({
          name: v.name,
          data: v.data,
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          // 线样式
          // lineStyle: {
          //   normal: {
          //     color(params: any) {
          //       var colorList = ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B']
          //       return colorList[params.dataIndex];
          //     }
          //   }
          // },
          // // 文字样式
          // itemStyle: {
          //   color(params: any) {
          //     var colorList = ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B']
          //     return colorList[params.dataIndex];
          //   }
          // },
          // // 区域填充颜色
          // areaStyle: {
          //   // normal: {},
          //   color: {
          //     type: 'linear',
          //     x: 0,
          //     y: 0,
          //     x2: 0,
          //     y2: 1,
          //     colorStops: [{
          //       offset: 0, color: '#62c8f9' // 0% 处的颜色
          //     }, {
          //       offset: 1, color: '#fff' // 100% 处的颜色
          //     }],
          //     global: false // 缺省为 false
          //   }
          // }
        })
      )
    }
    this.myChart.setOption(options);

    window.addEventListener('resize', () => {
      this.myChart.resize();
    })
  }


  beforeDestroy() {
    this.myChart.clear();
    this.myChart.dispose();
    window.onresize = null;
  }

}
