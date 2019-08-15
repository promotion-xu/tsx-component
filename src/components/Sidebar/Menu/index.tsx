

import {
  Component,
  Vue,
  Watch
} from 'vue-property-decorator';

import {
  Menu,
  Icon,
} from 'ant-design-vue';
import { RouterItem } from '@/interface';
// import { dyRoutes } from '@/router';
import { routes } from '@/utils/menu';
import './index.scss';


@Component({
  components: {
    'a-menu': Menu,
    'a-submenu': Menu.SubMenu,
    'a-menu-item-group': Menu.ItemGroup,
    'a-menu-item': Menu.Item,
    'a-icon': Icon,
  }
})
export default class MenuList extends Vue  {
  keys: string[] = [];
  openKeys: string[] = [];
  collapsed: boolean = false;

  @Watch('$route', { immediate: true, deep: true })
  routeChange(to: any, from: any) {
    this.keys = [String(to.path)];
  }

  openChange(openKeys: string[]) {
    this.openKeys = openKeys;
  }

  render() {
    return (
      <a-menu
        selectedKeys={this.keys}
        openKeys={this.openKeys}
        mode="inline"
        theme="dark"
        class="slMenu"
        inlineCollapsed={this.collapsed}
        onOpenChange={this.openChange}
        onClick={(e: any) => {
          this.openPage(e.key);
        }}
      >
        {this.renderMenu(routes)}
      </a-menu>
    );
  }

  renderMenu(menuData: RouterItem[]) {
    return menuData.map((item: RouterItem) => {
      if (item.isMenu && item.subs && item.subs.length && item.subs.some((el: any) => el.isMenu)) {
        return <a-submenu
          id={item.path}
          key={item.path}>
          <template slot="title">
            {/* {item.icon && <img src={require(`@/assets/icon/${item.icon}.png`)} alt={item.icon} />} */}
            <span>{item.title}</span>
          </template>
          {this.renderMenu(item.subs)}
        </a-submenu>;
      }
      if (item.isMenu) {
        return <a-menu-item
          id={item.path}
          key={`${item.path}`}>
          {/* {item.icon && 
            <img src={require(`@/assets/icon/${item.icon}.png`)} alt={item.icon} />
          } */}
          <span>{item.title}</span>
        </a-menu-item>;
      }
    });
  }

  openPage(path: string) {
    
    this.$router.push(path);
  }
}