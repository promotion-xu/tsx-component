import { Component, Vue } from 'vue-property-decorator';
import * as THREE from 'three';
import dat from 'dat.gui';

@Component({})
export default class ThreeD extends Vue {

  controls = {
    scene: null,
    camera: null,
    renderer: null,
    rotationSpeed: 0.02
  }

  render() {
    return (
      <div class='threeD__demo2' ref='threeD'>
        threeD__demo2
      </div>
    )
  }

  created() {

  }
}