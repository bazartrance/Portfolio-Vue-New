module.exports = {
    pwa: {
      name: 'Portfolio of Brandon Bazar',
      themeColor: '#001d2c',
      msTileColor: '#001d2c',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true,
      }
    }
  }