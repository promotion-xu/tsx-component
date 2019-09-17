import { Component, Vue } from 'vue-property-decorator';

import {
  message,
  Button,
} from 'ant-design-vue';

import MediaUtils from '@/utils/media';

import './index.scss'

@Component<RecordVideo>({
  name: 'RecordVideo',
  components: {
    'a-button': Button,
  },
  props: {
    recordStopped: {
      type: Function,
    },
    recordStarted: {
      type: Function
    },
  }
})

export default class RecordVideo extends Vue {
  recordStarted: any;
  mediaRecorder: any;
  mediaStream: any;
  recorderFile: any;
  visible: boolean = true;
  //rsc：摄像头未打开时不可点击检索
  disabledStatus: boolean = true;
  loading: boolean = false;
  videoFile: any
  btnText: string = '开始验证'
  video: any
  timer: any;
  $refs: any;

  startRecording() {

    this.videoFile = null

    this.recordStarted();
    this.loading = true;
    this.mediaRecorder.start();
    this.timer = setInterval(() => {

      if (this.mediaRecorder.state !== 'recording') return
      this.disabledStatus = true;
      this.mediaRecorder.stop();
      this.loading = false
      this.btnText = '重新检索'
      clearInterval(this.timer)
      this.video.pause()
      // 关闭媒体流
      MediaUtils.closeStream(this.mediaStream);

    }, 3000);
  }





  startVideo() {
    this.video = this.$refs.video;
    this.video.controls = false;
    this.video.muted = true;

    MediaUtils.openStream(true, false, ((err: Error, stream: any) => {
      if (err) {
        message.error(err);
      } else {
        this.mediaStream = stream;

        const vconstraints = {
          video: true
        };
        let localMediaStream;

        navigator.mediaDevices.getUserMedia(vconstraints)
          .then((mediaStream) => {
            localMediaStream = mediaStream;
            this.video.srcObject = mediaStream;
            this.video.play();
            // @ts-ignore
            this.mediaRecorder = new MediaRecorder(mediaStream);
            const chunks: any[] = [];
            this.mediaRecorder.ondataavailable = function (e: any) {
              chunks.push(e.data);
            };

            const that = this;
            this.mediaRecorder.onstop = ((e: any) => {
              this.recorderFile = new Blob(chunks, { type: 'video/mp4' });
              const videoURL = new FileReader();
              videoURL.readAsArrayBuffer(this.recorderFile);

              videoURL.onload = function () {
                const buffer = this.result;
                const uintArray = new Uint8Array(buffer as ArrayBuffer);
                that.videoFile = uintArray
                if (!that.loading && that.videoFile.length > 0) {
                  that.$props.recordStopped(uintArray);
                  that.mediaRecorder = null
                }
              };
            }).bind(this);




          })
          .catch(function (err) {
          });

      }
    }).bind(this), (val) => { this.disabledStatus = val });
  }

  play() {
    // if (this.$route.name !== 'searching' && this.$route.name !== 'Login' && this.$route.name !== 'aiopsyChect') {
    MediaUtils.closeStream(this.mediaStream);
    // }
  }
  close() {
    if (!this.mediaRecorder) return
    if (this.mediaRecorder.state !== 'recording') {
      this.mediaRecorder.start();
    }
    this.mediaRecorder.stop();
    // 关闭媒体流
    MediaUtils.closeStream(this.mediaStream);
  }

  mounted() {
    this.startVideo();
  }

  render() {
    return (
      <div ref='videoBox' class='record-video'>
        <video ref='video' class='video' onPlay={this.play}></video>
        <a-button
          class='record-btn'
          type='primary'
          disabled={this.disabledStatus}
          loading={this.loading}
          onClick={() => this.startRecording()}
        >{this.loading ? '正在检索' : this.btnText}
        </a-button>
      </div>
    )
  }
}