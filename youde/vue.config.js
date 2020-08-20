// 关闭eslint
module.exports = {
    lintOnSave: false,
    devServer:{
        proxy:{
          '/youde':{  //本地转发请求的标志
            target:'https://www.youde.com/', //转发的目标服务器地址
            pathRewrite:{
              '^/youde':'' //将多余的标志从数据请求的url中提出，保证接口的正确性
            }
          },
        //   '/nihao':{
        //     target:'https://www.baidu.com',
        //     pathRewrite:{
        //       '^/hello':''
        //     }
        //   }
        }
      }
}