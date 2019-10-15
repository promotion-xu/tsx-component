


/**
 *  (1) promise 使用
 * 
 **/

// new Promise((resolve, reject) => {
//   console.log('初始化');
//   resolve(111);
// })

// .then(() => {
//   throw new Error('有哪里不对了');
//   console.log('执行这个');
// })

// .catch(() => {
//   console.log('执行那个');
// })

// .then(() => {
//   console.log('执行这个, 无论前面发生了什么')
// })

// (1)初始化  (2) 执行那个 (3) 执行这个, 无论前面发生了什么




/**
 * ajax异步请求
 * 
 * 
 **/
function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(213);
    }, 1000)
  })
}
ajax().then((res) => {
  console.log('res', res);
})
