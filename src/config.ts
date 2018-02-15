export const CONFIG = {
  api: {
    hostname: 'codev.polytech-info.fr',
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
};
