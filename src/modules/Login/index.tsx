import {
  Vue,
  Component
} from 'vue-property-decorator';
import {
  Form,
  Input,
  Button,
  Icon
} from 'ant-design-vue';
import './index.scss';

const login_logo = require('@/assets/images/login/logo_white.png');

const formItemLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 8 },
};
const tailFormItemLayout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 8,
  },
};

@Component({
  components: {
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-button': Button,
    'a-input': Input,
    'a-icon': Icon
  },
  props: {
    Form,
  }
})
class Login extends Vue {
  render() {
    const { getFieldDecorator } = this.$props.Form;

    return (
      <div class="login">
        <div class="login__header">
          <div class="login__headerLogo">
            <img src={login_logo} />
          </div>
          <div class="login__headerTitle">
            {/* { config.title } */}
            前端组件平台
          </div>
        </div>

        <div class="login__wrapper">
          <div class="login__main">
            <a-form onSubmit={this.handleSubmit}  {...{ props: formItemLayout }}>
              <a-form-item label="账号" {...formItemLayout}>
                {
                  getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入账号' }]
                  })(
                    <a-input
                      prefix-icon="iconfont-user"
                      placeholder="请输入账号"
                    >
                      <a-icon slot='prefix' type='user' />
                    </a-input>
                  )
                }
              </a-form-item>
              <a-form-item label="密码" {...tailFormItemLayout}>
                {
                  getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }]
                  })(
                    <span>
                      <a-input
                        id="password"
                        prefix-icon="iconfont-lock"
                        type="password"
                        on-pressEnter={this.handleSubmit}
                        placeholder="请输入密码"
                      >
                        <a-icon slot="prefix" type="lock" />
                      </a-input>
                    </span>
                  )
                }
              </a-form-item>
              <a-form-item>
                <a-button 
                  htmlType='submit' 
                  type='primary'
                  onClick={this.handleSubmit}
                >
                  登录
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    )
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.$props.Form.validateFields((err: any, values: object) => {
      if(!err) {
        this.$router.push('/threeD/demo1')
      }
    })
  }
}

export default Form.create({})(Login);