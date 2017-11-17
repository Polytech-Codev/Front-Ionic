export const CONFIG = {
  api: {
    hostname: 'localhost',
    port: 3000,
    secure: false,
    base: '/',
    url: () => {
      return (CONFIG.api.secure ? 'https' : 'http')
      + '://' + CONFIG.api.hostname
      + (CONFIG.api.port == 80 ? '' : ':' + CONFIG.api.port)
      + CONFIG.api.base
    }
  }
}
