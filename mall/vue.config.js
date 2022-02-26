const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://www.imooc.com',//目标地址
        changeOrigin:false,
        pathRewrite:{
          '/api':' '
        }
      }
    }
  }
})
