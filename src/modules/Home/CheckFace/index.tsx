import { Component, Vue } from 'vue-property-decorator';
import RecordVideo from '@/components/RecordVideo';
import {
  Modal
} from 'ant-design-vue';
import './index.scss';
@Component({
  components: {
    'record-video': RecordVideo,
    'a-modal': Modal
  },
  props: {
    show: {
      type: Boolean,
      default() {
        return false
      },
      required: true
    },
    toLogin: {
      type: Function
    },
    closeVideo: {
      type: Function
    }
  }
})
export default class CheckFace extends Vue {

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
      <div class="check__face">
        <div class='CheckFace' style={!this.show ? 'display:none' : 'display:flex'}>
          <div class='CheckFace-container'>
            <div class='CheckFace-header'>
              <span class='CheckFace-title'>人脸验证登录</span>
              <span class='CheckFace-closeBtn' onClick={this.close}></span>
            </div>
            {
              !this.loading && !this.isSuccess ?
                (
                  <div class='CheckFace-video'>
                    <div class='CheckFace-tip'>
                      <span>
                        {this.tips}
                      </span>
                    </div>
                    <record-video
                      ref='recordVideo'
                      recordStopped={this.recordStopped}
                      recordStarted={this.recordStarted}
                    />
                    <div class='CheckFace-mask'></div>
                    <div class='CheckFace-face-container'>
                      <div class={['corner top', this.isStart && 'topMove']}></div>
                      <div class={['corner right', this.isStart && 'rightMove']}></div>
                      <div class={['corner bottom', this.isStart && 'bottomMove']}></div>
                      <div class={['corner left', this.isStart && 'leftMove']}></div>
                    </div>
                  </div>)
                :
                (
                  this.isSuccess ? (<div class='CheckFace-success'>
                    <div class='success-img'></div>
                    <div class='title'>人脸验证成功，正在登录系统…</div>
                  </div>) : (
                      <div class='CheckFace-loading'>
                        <div class='loading-img'>
                          <img src={require('@/assets/images/LivingCheck/身份验证1@2x.png')} alt="" />
                          <img src={require('@/assets/images/LivingCheck/身份验证2@2x.png')} alt="" />
                          <img src={require('@/assets/images/LivingCheck/身份验证3@2x.png')} alt="" />
                        </div>
                        <div class='title'>正在校验人脸信息中…</div>
                      </div>
                    )
                )
            }

          </div>
        </div>
      </div>
    )
  }


  recordStarted() {
    this.isStart = true
  }
  recordStopped(videoFile: any) {
    this.isStart = false
    this.loading = true;
    // request[LIVENESS]({ videoFile }).then(res => {
    //   const response = res.toObject()
    //   if (response.isPassed) {
    //     this.toLogin(response.livenessImageId)
    //     this.isSuccess = true
    //   } else {
    //     this.tips = '活检失败，请重试！'
    //   }
    //   this.loading = false
    // })
    //   .catch(err => {
    //     if (err.message === '未检测到人脸') {
    //       this.tips = err.message

    //     } else if (err.message.indexOf('size') !== -1) {
    //       this.tips = '活检视频过小，请重试'
    //     } else {
    //       this.tips = '活检失败，请重试！'
    //     }
    //     this.loading = false
    //   })
  }
  close() {
    if (!this.loading && !this.isSuccess) {
      this.$refs.recordVideo.close()
    }
    this.closeVideo()
  }
}