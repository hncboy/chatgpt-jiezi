const proxyConfigMappings: Record<ProxyType, ProxyConfig> = {
  dev: {
    prefix: '/api',
    target: 'http://localhost:3002/admin',
  },
  test: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  prod: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
}

export function getProxyConfig(envType: ProxyType = 'dev'): ProxyConfig {
  return proxyConfigMappings[envType]
}
