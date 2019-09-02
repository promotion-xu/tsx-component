import { Component, Vue } from 'vue-property-decorator';
import './index.scss';

@Component({})
export default class FaceDetection extends Vue {

  chunks = [];
  chunkList = [];
  btnText = '按住拍视频';
  index = 0;
  recorder: any;
  stream: any;
  video: any;

  render() {
    return (
      <div class="FaceDetection">
        <div class="recorder-wrapper">
          <div class="phone">
            <div class="phone-body">
              <div class="phone-head">
                <span>微信77</span>
                <span>哈哈</span>
                <span>...</span>
              </div>

              <div class="phone-content">
                <transition-group tag="ul" class="msg-list" name="fade">
                  <li class="msg eg" key="-1">
                    <div class="avatar"></div>
                    <div class="video">拍段视频吧</div>
                  </li>
                  {
                    this.chunkList && this.chunkList.map((item: any, index: number) => {
                      return (
                        <li>
                          <div class="avatar"></div>
                          <div class="video">
                            <img alt="截图" src="item.poster" />
                            <i class="el-icon-caret-right"></i>
                          </div>
                        </li>
                      )
                    })
                  }
                </transition-group>
              </div>

              <div 
                class="phone-operate"
                onMousedown={this.onMousedown}
                onMouseup={this.onMousedown}
                
              >{this.btnText}</div>
              <video ref="video" width="200"></video>
            </div>

          </div>
          <canvas ref="canvas"></canvas>
        </div>
      </div >
    )
  }



  requestAudioAccess() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
      this.recorder = new MediaRecorder(stream);
      this.stream = stream;
      this.bindEvents();
    }, error => {
      alert('出错，请确保已允许浏览器获取音视频权限');
    });
  }

  onMousedown() {
    this.showVideo(true);
    this.onPreview();
    this.btnText = '松开结束';
    this.onStart();
  }

  onMouseup() {
    this.onStop();
    this.btnText = '按住拍视频';
  }

  onPreview() {
    this.$refs.video.srcObject = this.stream;
    this.video.muted = true;
    this.video.play();
  }

  showVideo(bShow: any) {
    if (bShow) {
      this.video.style.display = 'block';
    } else {
      this.video.style.display = 'none';
      this.video.pause();
    }
  }

  onStart() {
    this.recorder.start();
  }

  onStop() {
    this.recorder.stop();
  }

  onPlay(index: any) {
    this.showVideo(true);
    let item = this.chunkList[index];
    this.video.src = item.stream;
    this.video.muted = false;
    this.video.play();

    this.bindAudioEvent();
  }

  bindAudioEvent() {
    this.video.onended = () => {
      this.showVideo(false);
    }
  }

  bindEvents() {
    this.recorder.ondataavailable = this.getRecordingData;
    this.recorder.onstop = this.saveRecordingData;
  }

  getRecordingData(e: any) {
    this.chunks.push(e.data);
  }

  saveRecordingData() {
    let blob = new Blob(this.chunks, { 'type': 'video/webm' }),
      videoStream = URL.createObjectURL(blob);
    this.chunkList.push({ stream: videoStream });

    this.onCapture(this.index);

    this.chunks = [];
  }

  //获取视频截图
  onCapture(index) {
    let item = this.chunkList[index];
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    this.canvas.toBlob((blob) => {
      let src = URL.createObjectURL(blob);
      this.$set(item, 'poster', src);
    });
    //索引后移
    this.index++;

    //隐藏video
    this.showVideo(false);
    this.video.srcObject = null;
  }

}