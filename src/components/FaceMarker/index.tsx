import { Component, Vue } from 'vue-property-decorator';
import {
  Modal
} from 'ant-design-vue';
import './index.scss';


@Component<FaceMarker>({
  components: {
    'a-modal': Modal
  },
  props: {
    visible: {
      required: true,
      type: Boolean
    },
    imageBase64: {
      required: true,
      type: String
    }
  },
  watch: {
    imageBase64(newBase64) {
      if (newBase64) {
        let img = new Image();
        img.addEventListener('load', () => {
          this.imgInfo.width = img.naturalWidth / 100;
          this.imgInfo.height = img.naturalHeight / 100;
          console.log('imgInfo', this.imgInfo);
          const { width, height } = this.imgInfo;
          const { width: cWidth, height: cHeight } = this.containerSize;
          this.imageScale = Math.min(cWidth / width, cHeight / height);
          this.imageTranslate = {
            x: (cWidth - width * this.imageScale) / 2,
            y: (cHeight - height * this.imageScale) / 2
          };
        }, false)
        img.src = newBase64;
      }
    }
  }
})
export default class FaceMarker extends Vue {

  readonly visible!: boolean;
  readonly imageBase64!: string;

  imageScale = 1;
  imgInfo = { width: 0, height: 0 };
  containerSize = { width: 9.50, height: 5.50 };
  imageTranslate = { x: 0, y: 0 }; // 图片偏移

  get imageInfo() {
    let img = new Image();
    img.addEventListener('load', () => {
      this.imgInfo.width = img.naturalWidth / 100;
      this.imgInfo.height = img.naturalHeight / 100;
      const { width, height } = this.imgInfo;
      const { width: cWidth, height: cHeight } = this.containerSize;
      console.log(cWidth, cHeight);
      this.imageScale = Math.min(cWidth / width, cHeight / height);
      console.log(this.imgInfo, this.imageScale);
      this.imageTranslate = {
        x: (cWidth - width / this.imageScale) / 2,
        y: (cHeight - height / this.imageScale) / 2
      };
      console.log('imageTranslate', this.imageTranslate);
    }, false)
    img.src = this.imageBase64;
    return { width: img.naturalWidth, height: img.naturalHeight }
  }

  get imageStyle() {
    const { width, height } = this.containerSize;
    const {width: imgWidth, height: imgHeight} = this.imageInfo
    return {
      width: imgWidth + 'rem',
      height: imgHeight + 'rem',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${this.imageBase64})`,
      top: `${this.imageTranslate.y}rem`,
      left: `${this.imageTranslate.x}rem`
    };
  }

  render() {
    return (
      <a-modal
        title={`人脸标注识别`}
        visible={this.visible}
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
        maskClosable={false}
        width="14rem"
      >
        <div class="FaceMarker__container">
          <div class="FaceMarker__sidebar">
            <div class="FaceMarker__instructionTitile">使用说明</div>
            <div>
              <div class="FaceMarker__operation">请选择一个已识别的人脸框</div>
              <div class="FaceMarker__light">或</div>
              <div class="FaceMarker__operation">手动标注一张未识别的人脸</div>
            </div>
            <div class="FaceMarker__demo">
              <div class="FaceMarker__light">手动标注方式如下图:</div>
              <div class="FaceMarker__demoImage" />
            </div>
          </div>

          <div
            class="FaceMarker__imageContainer"
            ref="imageContainer"
            style={{
              width: this.containerSize.width + 'rem',
              height: this.containerSize.height + 'rem',
            }}
          >
            <div
              ref="image"
              style={this.imageStyle}
              class={`FaceMarker__image`}
            >

            </div>
          </div>
        </div>
      </a-modal>
    )
  }

  handleSubmit() {
    this.$emit('hide');
  }

  handleCancel() {
    this.$emit('hide');
  }
}