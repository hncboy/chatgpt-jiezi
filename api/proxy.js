const { createProxyMiddleware } = require('http-proxy-middleware')
// const backendApiUrl = process.env.VITE_BASE_URL

module.exports = (req, res) => {
  let target = ''

  // 代理目标地址
  // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith('/backend'))
    target = 'https://api-demo.stargpt.top/admin'

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/backend`
      // 例如 /backend/user/login 将被转发到 http://backend-api.com/user/login
      '^/backend/': '/',
    },
  })(req, res)
}

