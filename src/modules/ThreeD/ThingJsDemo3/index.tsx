import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ThingJsDemo3 extends Vue {
  render() {
    return (
      <div class="thingJs__demo3" style={{ width: '100%', height: '100%' }}>
        <iframe 
          style={{ width: '100%', height: '100%' }} 
          src='http://www.thingjs.com/guide/sampleindex.html?m=examples/js/sample_102_GetData_Ajax_CORS.js'
        ></iframe>
      </div>
    );
  }

  created() {
    console.log('thingJsdemo3')
  }
}