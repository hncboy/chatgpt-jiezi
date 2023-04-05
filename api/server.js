const { createProxyMiddleware } = require('http-proxy-middleware')
const backendApiUrl = process.env.VITE_BASE_URL

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: backendApiUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '',
    },
  }))
}

