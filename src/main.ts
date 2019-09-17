import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { setHtmlFontSize } from '@/utils/rem';
import 'ant-design-vue/dist/antd.css';
import '../public/config.js';
Vue.config.productionTip = false


setHtmlFontSize();
window.addEventListener && window.addEventListener('resize', () => {
  setHtmlFontSize();
}, false);



new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app')
