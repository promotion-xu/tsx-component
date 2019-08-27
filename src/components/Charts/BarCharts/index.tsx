import { Component, Vue } from 'vue-property-decorator';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require("echarts/lib/component/legend");


@Component({
  props: {
    yAxis: {
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
    }
  },
  watch: {
    seriesData(val: any) {
      if (val) {
        this.drawBar();
      }
    }
  }
})
export default class BarCharts extends Vue {
  readonly yAxis: any;
  readonly seriesData: any;
  myChart: any;

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} ref="chart" class={`chart}`}>
      
      </div>
    )
  }

  mounted() {
    this.drawBar();
  }

  drawBar() {
    var dom = this.$refs.chart;

    this.myChart = echarts.init(dom);
    const option: any = {
      color: ['#0293FF', '#1DC651'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: this.yAxis
      },
      series: [
        {
          name: '抓拍统计',
          type: 'bar',
          barWidth: 15,
          data: this.seriesData
        }
      ]
    };

    this.myChart.setOption(option);
    window.onresize = () => {
      this.myChart.resize();
    }
  }


  beforeDestroy() {
    this.myChart.clear();
    this.myChart.dispose();
    window.onresize = null;
  }
}