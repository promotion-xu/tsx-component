import { Component, Vue } from 'vue-property-decorator';
import Menu from './Menu';
import './index.scss';
const logo = require('@/assets/images/sidebar/logo.png');

@Component({
  components: {
    Menu
  }
})
export default class Sidebar extends Vue {
  render() {
    return (
      <div class="sidebar">
        <div class="logo-warp">
          <img src={logo} alt=""/>
        </div>
        <Menu />
      </div>
    );
  }
}

