


/**
 * 检测arr1中的数组的某一项是否存在于arr2  只要有一个存在就返回 true
 * @param {arr1} ;
 * @param {arr2} ;
 * @return {Boolean} 
 */
export function isInclude(arr1: string[], arr2: string[]) {
  // 对于arr2也要进行非空校验，因为重置密码的用户登陆进来时会渲染菜单栏
  // 对于重置密码的用户，是没有在local里面设置所有的权限的
  if(!arr1 || !arr2) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      return true
    }
  }
  return false
}

