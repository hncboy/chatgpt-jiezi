// api/proxy.js
// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')
const backendApiUrl = process.env.VITE_BASE_URL

module.exports = (req, res) => {
  // 创建代理对象并转发请求
  createProxyMiddleware({
    backendApiUrl,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/api`
      // 如果开启了,那么 /api/user/login 将被转发到 http://xxxxx.cn/user/login
      '^/api/': '',
    },
  })(req, res)
}
