import { Component, Vue } from 'vue-property-decorator';
import {
  Upload,
  Icon,
} from 'ant-design-vue';
import FaceMarker from '@/components/FaceMarker';
import './index.scss';

@Component({
  components: {
    'a-upload': Upload,
    'a-icon': Icon,
  }
})
export default class FaceDrawing extends Vue {

  loading: boolean = false;
  imageUrl: string = '';
  imageBase64: string = '';  // 图片base64
  faceMarkerVisible: boolean = false;

  render() {
    const uploadButton = (
      <div>
        <a-icon type={this.loading ? 'loading' : 'plus'} />
        <div class="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div class='faceDrawing'>
        <div class='upload__content'>
          <div
            class="avatar"
          >
            <a-upload
              name='avatar'
              listType='picture-card'
              class='avatar-uploader'
              showUploadList={false}
              onChange={this.handleChange}
              customRequest={null}
            >
              {this.imageUrl ? <img src={this.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </a-upload>
          </div>
          {this.imageUrl &&
            <div class="remark">
              <a
                href="javascript:;;"
                onClick={this.handleRemark}
              >
                <img src={require('@/assets/images/edit.png')} style={{ width: '20px', verticalAlign: 'top' }} alt="" />
                重新标注
            </a>
            </div>
          }
        </div>

        {this.faceMarkerVisible &&
          <FaceMarker
            visible={this.faceMarkerVisible}
            onHide={() => this.faceMarkerVisible = false}
            onSubmit={this.handleSubmit}
            imageBase64={this.imageBase64}
          />
        }
      </div>
    )
  }




  async handleChange(info: any) {
    const base64: any = await this.getBase64(info.file.originFileObj);
    this.previewImg(info.file.originFileObj, (imageUrl: any) => {
      this.loading = false;
      this.imageUrl = imageUrl;
      this.imageBase64 = base64;
    })
  };

  async previewImg(img: any, callback?: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  async getBase64(file: any, callback?: any) {
    return new Promise(function (resolve, reject) {
      let reader = new FileReader();
      let imgResult: any = "";
      reader.readAsDataURL(file);
      reader.onload = function () {
        imgResult = reader.result;
      };
      reader.onerror = function (error) {
        reject(error);
      };
      reader.onloadend = function () {
        resolve(imgResult);
      };
    });
  }

  handleRemark() {
    this.faceMarkerVisible = true;
  }


  handleSubmit() {

  }


}