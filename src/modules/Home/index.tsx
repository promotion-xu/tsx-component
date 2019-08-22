import { Component, Vue } from 'vue-property-decorator';
import LineCharts from '@/components/Charts/LineCharts/index';
import './index.scss';

@Component({
  components: {
    'lineCharts': LineCharts
  }
})
export default class Home extends Vue {

  xData = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  seriesData = [
    {
      name: 'xuzen',
      data: [50, 2, 3, 4, 5, 6, 7]
    },
    {
      name: 'thl',
      data: [1, 2, 3, 4, 105, 6, 7]
    },
    {
      name: 'xu',
      data: [1, 2, 300, 4, 5, 6, 7]
    }
  ];
  legendData = ['xuzen', 'thl', 'xu']

  render() {
    return (
      <div class="subway">
        <div class="show">
          <lineCharts
            xData={this.xData}
            legendData={this.legendData}
            seriesData={this.seriesData}
          />
        </div>
      </div>
    );
  }

  created() {
    console.log('1222222222')
  }
}