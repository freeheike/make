const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: undefined,   
  publicPath: './',   
  // assetsPublicPath: './',
  outputDir: undefined,   
  assetsDir: undefined,   
  runtimeCompiler: undefined,   
  productionSourceMap: undefined,   
  parallel: undefined,   
  css: undefined,
  chainWebpack: config => {
    config.module
      .rule("css")
      .test(/\.css$/)
      .oneOf("vue")
      .resourceQuery(/\?vue/)
      .use("px2rem")
      .loader("px2rem-loader")
      .options({
      // 设置px转化为rem比例，设计稿大小为1920，比例 1920/ 10
        remUnit: 192
      });
  },
  //关闭弹窗
  devServer: {
    client: {
      overlay: false
    }
  }

})
// module.exports = {

//   // 配置px2rem-loader
//   chainWebpack: config => {
//     config.module
//       .rule("css")
//       .test(/\.css$/)
//       .oneOf("vue")
//       .resourceQuery(/\?vue/)
//       .use("px2rem")
//       .loader("px2rem-loader")
//       .options({
//       // 设置px转化为rem比例，设计稿大小为1920，比例 1920/ 10
//         remUnit: 192
//       });
//   },
// }

  