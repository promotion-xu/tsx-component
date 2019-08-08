/**
 * 路由path转为数组主要用于生产面包屑 路径等
 * @param route 路由路径 string类型;
 */

export function routeToArray(route: string): { routeArr: string[], params: string } {
  if (!route) {
    return {
      routeArr: [],
      params: '',
    };
  }
  const arr: string[] = route.split('/');
  const ret: string[] = [];
  let params = '';
  arr.shift();
  arr.forEach((item, index) => {
    if (parseInt(item, 10)) {
      params = item;
      return;
    }
    ret.push(index ? item : `/${item}`);
  });
  return {
    routeArr: ret,
    params,
  };
}