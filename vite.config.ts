import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'

import { convertEnv, getRootPath, getSrcPath } from './build/utils'
import { viteDefine } from './build/config'
import { setupVitePlugins } from './build/plugins'

export default defineConfig((configEnv: ConfigEnv) => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()
  const isBuild = configEnv.command === 'build'

  const viteEnv = convertEnv(loadEnv(configEnv.mode, process.cwd()))

  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    define: viteDefine,
    plugins: setupVitePlugins(viteEnv, isBuild),
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: false,
      proxy: {
        '/api': {
          target: viteEnv.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''), // 不可以省略rewrite
        },
      },
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      chunkSizeWarningLimit: 1024, // chunk 大小警告的限制（单位kb）
      commonjsOptions: {
        ignoreTryCatch: false,
      },
    },
  }
})
