import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ThingJsDemo4 extends Vue {
  render() {
    return (
      <div class="thingJs__demo4" style={{ width: '100%', height: '100%' }}>
        <iframe
          src={`http://www.thingjs.com/guide/sampleindex.html?m=examples/js/sample_021_Hello.js?n=457&time=${Math.random()}`}
          frameborder="0"
          style={{ width: '100%', height: '100%' }}
          ref="iframe"
        >
        </iframe>
      </div>
    );
  }

  mounted() {
    var iframe = this.$refs.iframe;
    var iwindow = iframe.contentWindow;
    var idoc = iwindow.document;
    console.log("window", iwindow);//获取iframe的window对象
    console.log("document", idoc);  //获取iframe的document
    console.log("html", idoc.documentElement);//获取iframe的html
    console.log("head", idoc.head);  //获取head
    console.log("body", idoc.body);  //获取body
  }
}