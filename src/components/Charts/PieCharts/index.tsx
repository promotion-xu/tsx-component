import { Component, Vue } from 'vue-property-decorator';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require("echarts/lib/component/legend");


@Component({
  props: {
    legendData: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    seriesData: {
      type: Array,
      require: true,
      default() {
        return []
      }
    },
    itemGap: {
      type: Number,
      default() {
        return 20
      }
    }
  },
  watch: {
    seriesData() {
      this.drawPie();
    }
  }
})
export default class PieCharts extends Vue {
  readonly legendData: any;
  readonly seriesData: any;
  readonly itemGap: number;
  myChart: any;

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} ref="chart" class="chart"></div>
    )
  }

  mounted() {
    this.drawPie();
  }

  drawPie() {
    var dom = this.$refs.chart;

    this.myChart = echarts.init(dom);

    const option: any = {
      color: ['#1665D8', '#1DC651', '#0293FF', '#1DBFC6'],
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        itemGap: this.itemGap,
        itemWidth: 14,
        data: this.legendData
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.seriesData
        }
      ]
    };

    this.myChart.setOption(option);
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