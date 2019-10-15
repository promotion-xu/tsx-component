import { Vue, Component } from 'vue-property-decorator';
import CheckFace from '@/components/CheckFace';

@Component({
  components: {
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
      </div>
    )
  }

  mounted() {
    console.log('visible', this.visible);
  }

  handleSubmit(val: any) {
    this.visible = false;
  }
}