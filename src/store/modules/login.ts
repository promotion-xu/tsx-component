import * as login from '@/api/apis/login';

import { Cache } from '@/utils/cache';

const logins = {
  state: {
    userInfo: {
      userName: '',
      accessToken: ''
    }
  },

  mutations: {
    SAVE_USER_INFO: (state: any, userInfo: any) => {
      Cache.localSet('userInfo', userInfo);
      state.userInfo = userInfo;
    }
  },


  actions: {
    // context 提交mutation
    login: (context: any, data: any) => {
      return login.login(data).then((res: any) => {
        const userInfo = {
          accessToken: res.accessToken,
          userName: res.adminUser.userName,
        }
        context.commit('SAVE_USER_INFO', userInfo);
      })
    }
  }

}


export default logins;