// let fileName = 'dist'

// if (process.env.VUE_APP_NAME === 'dist_s1x') {
//  fileName = process.env.VUE_APP_NAME
// }
// module.exports = {
//   outputDir:'./'+fileName,
//   devServer: {
//     // host: '0.0.0.0', //可以忽略不写
//     // port: 8081, //它是用来修改你打开后的端口号的
//     // open: true, //值为 true的话，项目启动时自动打开到浏览器里边， false不会打开
//     proxy: {
//       '/api': {
//         // https://ft-ec-shopline_ncx.lytc.dev/   https://ec1.yf.support  https://rea-ec-template1.yf.support
//         target: 'https://ft-ec-one_shop.lytc.dev', //跨域请求的公共地址 
//         ws: false, //也可以忽略不写，不写不会影响跨域
//         changeOrigin: true, //是否开启跨域，值为 true 就是开启， false 不开启
//         pathRewrite: {
//           '^/api': '' //注册全局路径， 但是在你请求的时候前面需要加上 /api  
//         }
//       }
//     },
//     // publicPath: process.env.NAME === 'dist_s1x' ? '/dist_s1x/' : '/'
//   },
// }







const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('lodash.merge')

// 环境变量 决定入口是客户端还是服务端 （如果WEBPACK_TARGET=node则是服务端否则是客户端）
const TARGET_NODE = process.env.WEBPACK_TARGET === "node"
const target = TARGET_NODE ? "server" : "client"

const path = require('path')
module.exports = {
  css: {
    extract: true
  },
  outputDir: './dist/' + target,
  configureWebpack: () => ({
    entry: `./src/entry-${target}.js`,
    devtool: 'source-map',
    target: TARGET_NODE ? "node" : "web",
    node: TARGET_NODE ? undefined : false,
    output: {
      libraryTarget: TARGET_NODE ? "commonjs2" : undefined
    },
    externals: TARGET_NODE ? nodeExternals({
      allowlist: [/\.css$/]
    }) : undefined,
    optimization: {
      splitChunks: TARGET_NODE ? false : undefined
    },
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }),
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        merge(options, {
          optimizeSSR: false
        });
      });
  },
  devServer: {
    // host: '0.0.0.0', //可以忽略不写
    // port: 8081, //它是用来修改你打开后的端口号的
    // open: true, //值为 true的话，项目启动时自动打开到浏览器里边， false不会打开
    proxy: {
      '/api': {
        // https://ft-ec-shopline_ncx.lytc.dev/   https://ec1.yf.support  https://rea-ec-template1.yf.support
        target: 'https://ft-ec-one_shop.lytc.dev', //跨域请求的公共地址 
        ws: false, //也可以忽略不写，不写不会影响跨域
        changeOrigin: true, //是否开启跨域，值为 true 就是开启， false 不开启
        pathRewrite: {
          '^/api': '' //注册全局路径， 但是在你请求的时候前面需要加上 /api  
        }
      }
    },
    // publicPath: process.env.NAME === 'dist_s1x' ? '/dist_s1x/' : '/'
  },

}