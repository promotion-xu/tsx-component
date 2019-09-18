import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {

  idNumber: string = '';
  isShowVideo: boolean = true;

  render() {
    return (
      <div class="home">
        home
      </div>
    )
  }
}