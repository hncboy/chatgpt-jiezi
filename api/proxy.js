// api/proxy.js
// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')
const viteBaseUrl = process.env.VITE_BASE_URL

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: viteBaseUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  }))
}
