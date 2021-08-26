const path = require('path');
const localServer = process.env.LOCAL_SERVER;
module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'https://movies.demostaging.ro/api',
                pathRewrite: { '^/api': '' }
            },
            '/imgs/':{
                target: localServer ? 'http://localhost:5984/heritagerepository-objects/' : 'https://fid.superdev.ro/imgs/',
                pathRewrite: { '^/imgs': '' }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    },
    runtimeCompiler: true
};
