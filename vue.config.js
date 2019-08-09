module.exports = {
    devServer: {
      port: 4200,
      proxy: {
        '^/': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
        },
      },
    },
  };