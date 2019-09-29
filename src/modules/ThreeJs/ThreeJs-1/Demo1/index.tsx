import {
  Vue, Component
} from 'vue-property-decorator';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
@Component({
  props: {
    data: {
      required: true,
      type: Object
    }
  }
})
export default class Demo1 extends Vue {
  readonly data: any;
  refs: {
    ThreeJs: any;
    ThreeJs1: any;
    ThreeJs3: any;
  }
  width: any;
  height: any;
  scene: any;
  renderer: any;
  camera: any;
  geometry: any;
  line: any;
  material: any;

  render() {
    return (
      <div class={`ThreeJs${this.data.key}`} ref={`ThreeJs${this.data.key}`}></div>
    )
  }


  mounted() {
    this.demo2(this.data.key);
  }

  demo2(key: number) {
    this.initThree(key);
    this.initCamera();
    this.initScene();
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