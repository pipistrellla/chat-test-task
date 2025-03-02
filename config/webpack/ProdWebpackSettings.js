const webpack = require('webpack');

const isDevValue = process.env.NODE_ENV === 'development';

module.exports = function overrideProd(config) {
    console.log('Загружена конфигурация для деплоя');
    config.optimization.minimize = true;

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDevValue),
        }),
    );

    return config;
};
