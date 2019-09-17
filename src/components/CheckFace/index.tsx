import { Vue, Component } from 'vue-property-decorator';
import {
  Modal,
  Icon,
  Button
} from 'ant-design-vue';
import RecordVideo from './RecordVideo';
import './index.scss';

@Component({
  components: {
    'a-modal': Modal,
    'a-icon': Icon,
    'a-button': Button,
  },
  props: {
    visible: {
      required: true,
      type: Boolean
    },
    title: {
      type: String,
    },
  }
})
export default class CheckFace extends Vue {
  readonly visible: boolean;
  readonly title: string;

  $refs: any;
  show: any;
  toLogin: any;
  closeVideo: any;
  isStart: boolean = false;
  tips: string = '请将人脸置于识别框内';
  isSuccess: boolean = false;
  loading: boolean = false;

  render() {
    return (
      <a-modal
        visible={this.visible}
        title={this.title}
        width={'8rem'}
        onOk={this.handleSubmit}
        onCancel={this.handleClose}
        footer={null}
      >
        <div class='CheckFace'>
          {!this.loading && !this.isSuccess ?
            <div class="CheckFace">
              <div class='CheckFace-tip'>
                <span>
                  {this.tips}
                </span>
              </div>
              <RecordVideo
                ref='recordVideo'
                recordStopped={this.recordStopped}
                recordStarted={this.recordStarted}
              />
              <div class='CheckFace-face-container'>
                <div class={['corner top', this.isStart && 'topMove']}></div>
                <div class={['corner right', this.isStart && 'rightMove']}></div>
                <div class={['corner bottom', this.isStart && 'bottomMove']}></div>
                <div class={['corner left', this.isStart && 'leftMove']}></div>
              </div>
            </div>
            :
            (this.isSuccess ? 
              <div class="success">
                <img src={require('@/assets/images/LivingCheck/验证成功@2x.png')} alt=""/>
                <div>活体验证成功</div>
              </div>
              :
              <div class='fail'>
                <a-icon type="close" />
                活体验证失败,请重新验证
              </div>
            )

          }


        </div>
      </a-modal>
    )
  }

  recordStarted() {
    this.isStart = true
  }

  recordStopped(videoFile: any) {
    this.isStart = false
    this.loading = true;
    this.$emit('submit', videoFile);
  }

  handleSubmit() {
    this.$emit('submit', { name: 'sdjs' });
  }

  handleClose() {
    this.$emit('close');
  }

}