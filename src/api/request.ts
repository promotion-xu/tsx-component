import axios from 'axios';
import { message } from 'ant-design-vue';
import router from '@/router';
import { Cache } from '@/utils/cache';
import config from '@/utils/config';


const service = axios.create({
  timeout: 50000,
  // baseURL: config.API,
});

service.interceptors.request.use(
  (config: any) => {
    const userInfo = Cache.localGet('userInfo');
    if (userInfo) {
      config.headers.accessToken = userInfo.accessToken;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);
let timer: number = 0;
service.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      if (response.data.statusCode === 200) {
        return response.data;
      }
      if (response.data.statusCode === -20) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          Cache.localRemove('userInfo');
          router.push('/login');
        }, 1000);
      }
      message.error(response.data.msg);
      return Promise.reject(new Error());
    }
  },
  (error: any) => {
    if (error.response && error.response.status === 504) {
      message.error('服务器异常');
    } else if (error.response && error.response.status === 403) {
      message.error('权限不足,请联系管理员!');
    } else if (error.response && error.response.status === 404) {
      message.error('请求不存在!');
    } else if (error.response && error.response.status === 500) {
      message.error('服务器异常!');
    } else if (error.response && error.response.status === 400) {
      message.error(error.response.data.msg);
    } else {
      message.error('error.response.message');
    }
    return Promise.reject(error);
  },
);

export default service;
