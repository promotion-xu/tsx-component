import { Vue, Component } from 'vue-property-decorator';
import CheckFace from '@/components/CheckFace';
import {
  Icon,
} from 'ant-design-vue'
@Component({
  components: {
    'a-icon': Icon
  }
})
export default class LivingCheck extends Vue {
  visible: boolean = true;
  render() {
    return (
      <div class="livingCheck">
        <CheckFace 
          visible={this.visible}
          title={'活体识别检测'}
          onClose={() => this.visible = false}
          onSubmit={this.handleSubmit}
        />
        <a-icon type='search'></a-icon>
      </div>
    )
  }

  handleSubmit(val: any) {
    this.visible = false;
    console.log('val', val);
  }
}