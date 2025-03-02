const path = require('path');

const Dev = require('./config/webpack/DevWebpackSettings');
const Prod = require('./config/webpack/ProdWebpackSettings');

// react-app-rewired start => автоматически ставит NODE_ENV=development
// react-app-rewired build => автоматически ставит NODE_ENV=production

module.exports = function override(config, env) {
    console.log('Current ENV:', env);

    config.resolve = {
        ...config.resolve,
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    };
    if (env === 'development') {
        return Dev(config);
    }
    if (env === 'production') {
        return Prod(config);
    }
    return config;
};
