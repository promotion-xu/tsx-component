import { Component, Vue } from 'vue-property-decorator';
import * as THREE from 'three';
@Component({})
export default class Demo3 extends Vue {

  scene: any;

  render() {
    return (
      <div class="demo3">

      </div>
    )
  }

  mounted() {
    let object1 = new THREE.Object3D();
    let object2 = new THREE.Object3D();
    object1.add(object2);
    this.scene.add(object1);
  }
}