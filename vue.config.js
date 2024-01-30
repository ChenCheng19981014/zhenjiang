const path = require('path');

module.exports = {
    lintOnSave: false,
    // publicPath: process.env.VUE_APP_BASE_ASSETS,
    publicPath: './',
    chainWebpack: config => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    },
    devServer: {
        open: false,
        port: 80
    }
}

