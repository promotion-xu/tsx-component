
import cloneDeep from 'lodash/cloneDeep';
import assign from 'lodash/assign';
export const MODULE_PATH = 'home';


export enum actionTypes {
  INIT = 'INIT',
  GET_ALARM_NUM = 'GET_ALARM_NUM',
  CHANGE_ALARM_NUM = 'CHANGE_ALARM_NUM'
}


const initialState = {
  alarmNum: 0,
};

const state = cloneDeep(initialState);

const actions = {
  [actionTypes.INIT]( { state } ) {
    assign(state, cloneDeep(initialState));
  },
  [actionTypes.GET_ALARM_NUM] ( { state } , data ) {
    state.alarmNum = data;
  }
}

const mutations = {
  [actionTypes.CHANGE_ALARM_NUM]( state, param) {
    state.alarmNum = param;
  }
}


export default {
  state,
  actions,
  mutations,
  namespaced: true
}