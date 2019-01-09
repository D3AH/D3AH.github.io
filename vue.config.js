module.exports = {
    chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-md-loader')
      .loader('vue-md-loader/index')
      .options({
        raw: true
      })
  }
}