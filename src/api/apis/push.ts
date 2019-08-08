import request from '../request';

/**
 * 获取推送配置
 * @param params 请求体;
 */
export const getPushConfig = (params: object) => {
  return request.get('/push/config', { params });
};
/**
 * 查询推送列表
 * @param params 请求体;
 */
export const findPushList = (params: object) => {
  return request.get('/push/list', { params });
};
/**
 * 查询推送信息的子集
 * @param params 请求体;
 */
export const findPushChildList = (params: object) => {
  return request.get('/push/list/child', { params });
};
/**
 * 修改推送消息状态
 * @param params 请求体;
 */
export const modificationPushInfoState = (params: object) => {
  return request.put('/push/modify/state', { ...params });
};
/**
 * 推送消息
 * @param params 请求体;
 */
export const pushInfo = (params: object) => {
  return request.post('/push', { ...params });
};
/**
 * 批量修改推送消息
 * @param params 请求体;
 */
export const batchModificatyPushInfo = (params: object) => {
  return request.put('/push/modify/batch', { ...params });
};
