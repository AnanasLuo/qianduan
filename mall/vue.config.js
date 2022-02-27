const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  lintOnSave:false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://www.imooc.com',//  
        changeOrigin:false,
        pathRewrite:{
          '/api':' '
        }
      }
    }
  }
})
