import request from '../request';

export const login = (params: object) => {
  return request.get('/login', { params });
};


export const logout = (params: object) => {
  return request.get('/login/logout', { params });
};
