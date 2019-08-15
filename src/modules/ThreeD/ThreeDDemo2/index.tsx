import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ThreeDDemo2 extends Vue {

  render() {
    return (
      <div class='threeD__demo2' ref='threeD'>
        threeD__demo2
      </div>
    )
  }

  created() {
    console.log("ThreeDDemo2")
  }
}