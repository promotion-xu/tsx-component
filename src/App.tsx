import {
  Component,
  Vue
} from 'vue-property-decorator';
import { LocaleProvider } from 'ant-design-vue';
import Sidebar from '@/components/Sidebar';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import './app.scss';

import '@/style/index.scss';
@Component({
  components: {
    Sidebar,
    'a-locale-provider': LocaleProvider,
  },
})
export default class App extends Vue {
  render() {
    if (['/login'].indexOf(this.$route.path) > -1) {
      return (
        <div id="app-one">
          <router-view />
        </div>
      )
    }
    return (
      <div id='app'>
        <a-locale-provider locale={zh_CN}>
          <div class="gateway-main">
            {/* <div class="gateway-sidebar">
              <Sidebar />
            </div> */}
            <div class="gateway-content">
              <div class="page-wrap">
                <router-view />
              </div>
            </div>
          </div>
        </a-locale-provider>
      </div>
    );
  }
}