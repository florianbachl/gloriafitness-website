const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    devServer: {
      host: 'localhost',
      port: 8090,
      webSocketServer: {
        options: {
          perMessageDeflate: false
        }
      }
    },
    chainWebpack: config => {
      // Disable ESLint plugin to avoid ESLint 10 compatibility issues
      config.plugins.delete('eslint');
    }
  });