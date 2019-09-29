import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Demo2 extends Vue {

  render() {
    return (
      <div 
        class="info"
        style={{
          position: 'absolute',
          textAlign: 'center',
          zIndex: 100,
          width: '100%',
          top: '10px'
        }}
      >
        Description
      </div>
    )
  }
}