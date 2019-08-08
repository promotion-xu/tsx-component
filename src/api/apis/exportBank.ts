import request from '../request';

/**
 * 获取静态库配置列表
 * @param params 请求体;
 */
export const getDbList = (params: object) => {
  return request.get('/gallery/viper/db/list', { params });
};

/**
 * 新建静态库配置
 * @param params 请求体;
 */
export const createDB = (data: object) => {
  return request.post(`/gallery/viper/db/save`, data);
};

/**
 * 删除静态库
 * @param params 请求体;
 */
export const deleteDB = (data: object) => {
  return request.post(`/gallery/viper/db/delete`, data);
};

/**
 * 获取产品配置
 * @param params 请求体;
 */
export const getProductConfig = (params: object) => {
  return request.get(`/gallery/config/product`, { params });
};

/**
 * 获取全局产品配置
 */
export const getGlobalConfig = () => {
  return request.get(`/gallery/config/global`);
};

/**
 * 更新全局产品配置
 */
export const updateGlobalConfig = (params: object) => {
  return request.put(`/gallery/config/update/global`, { ...params });
};


/**
 * 获取静态库配置列表
 * @param params 请求体;
 */
export const getTaskLists = (params: object) => {
  return request.get('/gallery/task/list', { params });
};

/**
 * 获取人像库名称列表
 * @param params 请求体;
 */
export const getProductDBname = (params: object) => {
  return request.get('/gallery/product/getDb', { params });
};

/**
 * 获取入库策略
 */
export const getProductlist = () => {
  return request.get('/gallery/product/list');
};

/**
 * 获取产品
 */
export const getTaskpPolicy = () => {
  return request.get('/gallery/task/policy');
};

/**
 *  创建 viper 入库
 * @param params 请求体;
 */
export const saveTaskViper = (data: object) => {
  return request.post(`/gallery/task/save`, data);
};

/**
 *  入库成功
 * @param params 请求体;
 */
export const getSuccessList = (params: object) => {
  return request.get(`/gallery/task/sync/list`, { params });
};

/**
 *  批量操作任务状态
 * @param path 请求路径;
 * @param params 请求体;
 */
export const setTaskBatchStatus = (path: string, data: object) => {
  return request.post(`/gallery/task/process/batch/${path}`, data);
};

/**
 *  单个操作任务状态
 * @param path 请求路径;
 * @param id 请求数据id;
 */
export const setTaskStatus = (dataPath: { processType: string, id: string }) => {
  return request.post(`/gallery/task/process/${dataPath.processType}/${dataPath.id}`);
};

/**
 *  批量删除同步成功记录
 * @param path 请求路径;
 * @param id 请求数据id;
 */
export const deleteTaskBatch = (data: object) => {
  return request.put(`/gallery/task/sync/batch/delete`, data);
};



