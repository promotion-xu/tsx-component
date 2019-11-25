import { Vue, Component } from 'vue-property-decorator';
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
import * as home from '@/store/modules/home';
@Component({
  computed: {
    ...mapState(home.MODULE_PATH, ['alarmNum'])
  },
  methods: {
    ...mapActions(home.MODULE_PATH, {
      getAlarmNum: home.actionTypes.GET_ALARM_NUM
    }),
    ...mapMutations(home.MODULE_PATH, {
      changeAlarmNum: home.actionTypes.CHANGE_ALARM_NUM
    })
  }
})
export default class Home extends Vue {
  readonly alarmNum: number;
  readonly getAlarmNum: (val) => void;
  readonly changeAlarmNum: (val) => void;

  render() {
    return (
      <div class="home">
        {this.alarmNum}
      </div>
    )
  }

  created() {
    this.getAlarmNum(111);
    this.changeAlarmNum(222);
  }
}