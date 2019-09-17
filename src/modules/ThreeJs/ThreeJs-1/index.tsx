import { Vue, Component } from 'vue-property-decorator';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import './index.scss';

@Component({})
export default class ThreeJS extends Vue {
  refs: {
    ThreeJs1: any
  }
  width: any;
  height: any;
  scene: any;
  renderer: any;
  camera: any;

  render() {
    return (
      <div class="ThreeJs" ref='ThreeJs1'>
      </div>
    )
  }

  mounted() {
    this.demo2();
    
  }

  demo2() {
    var initLight = () => {
      let light;
      light = new THREE.DirectionalLight(0xFF0000, 1.0);
      light.position.set(100, 100, 200);
      this.scene.add(light);
    }
    var initObject = () => {
      let cube;
      var geometry = new THREE.Geometry();
      var material = new THREE.LineBasicMaterial({ vertexColors: true });
      var color1 = new THREE.Color(0x444444), 
      color2 = new THREE.Color(0xFF0000);

      // 线的材质可以由2点的颜色决定
      var p1 = new THREE.Vector3(-100, 0, 100);
      var p2 = new THREE.Vector3(100, 0, -100);
      geometry.vertices.push(p1);
      geometry.vertices.push(p2);
      geometry.colors.push(color1, color2);

      var line = new THREE.Line(geometry, material, THREE.LinePieces);
      this.scene.add(line);
      console.log('line', line);
    }
    
    this.initThree();
    this.initCamera();
    this.initScene();
    initLight();
    initObject();
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    
  }

  initThree() {
    this.width = this.$refs.ThreeJs1.offsetWidth;
    this.height = this.$refs.ThreeJs1.offsetHeight;
    this.renderer = new WebGLRenderer({
      antialias: true
    });
    this.renderer.setSize(this.width, this.height);
    this.$refs.ThreeJs1.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xFFFFFF, 1.0);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 1000;
    this.camera.position.z = 0;
    this.camera.up.x = 0;
    this.camera.up.y = 0;
    this.camera.up.z = 1;
    this.camera.lookAt({
      x: 0,
      y: 0,
      z: 0
    });
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  demo1() {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(75, this.$refs.ThreeJs1.offsetWidth / this.$refs.ThreeJs1.offsetHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(this.$refs.ThreeJs1.offsetWidth, this.$refs.ThreeJs1.offsetHeight);

    this.$refs.ThreeJs1.appendChild(renderer.domElement);
    var geometry = new THREE.CubeGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material); scene.add(cube);
    camera.position.z = 5;
    function render() {
      requestAnimationFrame(render);
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);
    }
    render();
  }
}