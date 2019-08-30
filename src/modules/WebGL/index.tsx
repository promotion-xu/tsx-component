import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class WebGL extends Vue {
  $refs: {
    canvas: any
  }

  render() {
    return (
      <div class="webGl">
        <canvas ref='canvas' style={{width: '6.4rem', height: '4.8rem'}}></canvas>

      </div>
    )
  }

  mounted() {
    this.main();
  }

  main() {
    const canvas = this.$refs.canvas;
    // Initialize the GL context
    const gl = canvas.getContext("webgl");
  
    // Only continue if WebGL is available and working
    if (!gl) {
      return;
    }
  
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
}