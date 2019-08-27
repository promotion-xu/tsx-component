const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },

  pwa: {
    iconPaths: {
      favicon32: 'logo.png',
      favicon16: 'logo.png',
      appleTouchIcon: 'logo.png',
      maskIcon: 'logo.png',
      msTileImage: 'logo.png'
    },
  },

  configureWebpack: config => {
    // 忽略报错信息
    // https://cli.vuejs.org/zh/config/#configurewebpack
    config.plugins.forEach((item,i)=>{
      if(item.tsconfig){
        config.plugins.splice(i,1);
      }
    })
  }
}
