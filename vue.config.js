const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: ['vue-clamp', 'resize-detector'],
  css: {
    loaderOptions: {
        // 給 sass-loader 傳遞選項
        sass: {
            // @/ 是 src/ 的別名
            // 所以這裡假設你有 `src/assets/css/varuables.scss` 這個檔案
            data: `@import "~@/variables.scss";`
        }
         
      }
    },
   
  chainWebpack: (config)=>{
    config.module
    .rule('graphql')
    .test(/\.graphql$/)
    .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
    config.resolve.alias
        .set('@$', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('layout',resolve('src/layout'))
        .set('base',resolve('src/base'))
        .set('static',resolve('src/static'))
        .set('service',resolve('src/service'))
        .set('mixin',resolve('src/mixin'))
        
    }
   
  }