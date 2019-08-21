import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class WebSocket extends Vue {
  render() {
    return (
      <div class="websocket">

      </div>
    );
  }

  created() {
    var ws = new WebSocket('ws://10.5.6.33:10221/senseface/stomp/814/dk04xk4y/websocket');
    ws.open = function () {
      // ws.send("发送数据");
      alert("数据发送中...");
    }

    ws.onmessage = function (evt: any) {
      var data = evt.data;
      console.log('data', data);
    }
  }

  mounted() {

  }
}