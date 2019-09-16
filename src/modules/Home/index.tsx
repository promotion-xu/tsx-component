import { Component, Vue } from 'vue-property-decorator';
import {
  Input,
  Button,
  message
} from 'ant-design-vue';
import  CheckFace from './CheckFace';
import './index.scss';

@Component({
  components: {
    'check-face': CheckFace,
    'a-input': Input,
    'a-button': Button
  }
})
export default class Home extends Vue {

  idNumber: string = '';
  isShowVideo: boolean = false;

  render() {
    return (
      <div class="home">
        <a-input  
          placeholder="请输入身份证号码"
          size={'large'}
          width={'200px'}
          onChange={this.handleChangeId}      
        ></a-input>
        <a-button
          onClick={this.handleCheck}
        >开始验证</a-button>
        {
          this.isShowVideo &&

          <check-face
            ref='checkFace'
            show={this.isShowVideo}
            closeVideo={this.handleCloseVideo}
            toLogin={this.handleLogin}
          />
        }
      </div>
    )
  }

  mounted() {

  }

  handleChangeId(val: string) {
    this.idNumber = val;
  }


  handleCheck() {
    if(this.idNumber.length) {
      return message.warning('请先输入身份证号')
    }
    this.isShowVideo = true;
  }

  handleCloseVideo() {
    this.isShowVideo = false;
  }

  handleLogin() {

  }
}

