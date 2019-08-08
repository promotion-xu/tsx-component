

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
import { routeToArray } from '@/utils/router';
import { dyRoutes } from '@/router';
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
    this.keys = routeToArray(to.path).routeArr;
    const open = this.keys.concat();
    open.pop();
    this.openKeys = open || [];
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
        onClick={(params: { item: any, key: string, keyPath: string[] }) => {
          const keyPath = params.keyPath.reverse();
          this.openPage(keyPath.join('/'));
        }}
      >
        {this.renderMenu(dyRoutes)}
      </a-menu>
    );
  }

  renderMenu(menuData: RouterItem[]) {
    return menuData.map((item: RouterItem) => {
      if (item.isMenu && item.children && item.children.length && item.children.some((el: any) => el.isMenu)) {
        return <a-submenu
          id={item.path}
          key={item.path}>
          <template slot="title">
            {/* {item.icon && <img src={require(`@/assets/icon/${item.icon}.png`)} alt={item.icon} />} */}
            <span>{item.title}</span>
          </template>
          {this.renderMenu(item.children)}
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