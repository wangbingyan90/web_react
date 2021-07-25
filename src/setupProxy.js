const {createProxyMiddleware}  = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware(  '/api',{ 
            target: 'https://eyesight.news.qq.com',
            changeOrigin :true,
            pathRewrite: {
                '/api':''
            }
        }));
};