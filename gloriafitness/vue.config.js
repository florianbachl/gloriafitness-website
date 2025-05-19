module.exports = {
    devServer: {
      host: 'localhost',
      port: 8090,
      webSocketServer: {
        options: {
          perMessageDeflate: false
        }
      }
    }
  }