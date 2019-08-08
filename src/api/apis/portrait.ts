import request from '../request';

export const getApiList = (params: object) => {
  return request.get('/api/info/list', { params });
};



