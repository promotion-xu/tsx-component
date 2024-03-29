import { Vue, Component } from 'vue-property-decorator';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import {
  Tabs
} from 'ant-design-vue';
import './index.scss';

const { TabPane } = Tabs;

@Component({
  components: {
    'a-tabs': Tabs,
    'a-tab-pane': TabPane
  }
})
export default class ThreeJS extends Vue {
  width: any;
  height: any;
  scene: any;
  renderer: any;
  camera: any;
  geometry: any;
  line: any;
  material: any;
  lists: any = [
    {
      key: 1,
      title: 'Drawing Lines'
    },
    {
      key: 2,
      title: 'Creating Text',
    },
    {
      key: 3,
      title: 'Loading 3D models'
    }
  ]
  render() {
    return (
      <div class="ThreeJs" ref='ThreeJs'>
        <a-tabs defaultActiveKey="1" onTabClick={this.handleTabClick} tabPosition={'left'} style={{ height: 220 }}>
          {
            this.lists.map((item: any) => {
              return (
                <a-tab-pane tab={`${item.title}`} key={item.key}>
                  {this.getTabPane(item)}
                </a-tab-pane>
              )
            })
          }
        </a-tabs>

      </div>
    )
  }

  mounted() {
    this.handleTabClick(1);
  }

  initParams() {
    this.width = null;
    this.height = null;
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.geometry = null;
    this.line = null;
    this.material = null;
  }


  getTabPane(item: any) {
    switch (item.key) {
      case 1:
        return <Demo1 data={item} />;
      case 2:
        return <Demo2 />;
      case 3:
        return <Demo3 />;
      default:
        return null;
    }
  }

  handleTabClick(key: number) {
    switch (key) {
      case 1:
        this.demo1(key);
        break;
      case 2:
        this.demo2(key)
        break;
      case 3:
        this.demo3(key);
    }
  }


  demo1(key: number) {
    this.initThree(key);
  }

  demo2(key: number) {
    this.initThree(key);
    this.initCamera();
    this.initScene();
  }
  demo3(key: number) {

  }

  initThree(key: number) {
    this.renderer = new WebGLRenderer();
    setTimeout(() => {
      switch (key) {
        case 1:
          this.width = this.$refs.ThreeJs1.offsetWidth;
          this.height = this.$refs.ThreeJs1.offsetHeight;
          this.renderer.setSize(this.width, this.height);
          this.$refs.ThreeJs1.innerHTML = '';
          this.$refs.ThreeJs1.appendChild(this.renderer.domElement);
          break;
        case 2:
          this.width = this.$refs.ThreeJs2.offsetWidth;
          this.height = this.$refs.ThreeJs2.offsetHeight;
          this.renderer.setSize(this.width, this.height);
          this.$refs.ThreeJs1.innerHTML = '';
          this.$refs.ThreeJs2.appendChild(this.renderer.domElement);
          break
        case 3:
          this.width = this.$refs.ThreeJs3.offsetWidth;
          this.height = this.$refs.ThreeJs3.offsetHeight;
          this.renderer.setSize(this.width, this.height);
          this.$refs.ThreeJs1.innerHTML = '';
          this.$refs.ThreeJs3.appendChild(this.renderer.domElement);
          break;
      }
      this.renderer.setClearColor(0xFFFFFF, 1.0);
      this.initCamera();
      this.initScene();
      this.initBasicLine();
      this.renderThree();
    })
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initBasicLine() {
    this.material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    this.geometry = new THREE.Geometry();
    this.geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    this.geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    this.geometry.vertices.push(new THREE.Vector3(10, 0, 0));
    this.line = new THREE.Line(this.geometry, this.material);
  }

  renderThree() {
    this.scene.add(this.line);
    this.renderer.render(this.scene, this.camera);
  }
}