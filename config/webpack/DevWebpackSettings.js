const webpack = require('webpack');

const isDevValue = process.env.NODE_ENV === 'development';

module.exports = function overrideDev(config) {
    console.log('Загружена конфигурация для разработки');

    config.devtool = 'cheap-module-source-map';
    config.stats = 'errors-only';

    config.devServer = {
        ...config.devServer,
        port: config.env?.PORT_FRONTEND || 3000,
        open: true,
    };
    console.log(isDevValue);

    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.STEAM_API_KEY': JSON.stringify(
                process.env.STEAM_API_KEY,
            ),
            __IS_DEV__: JSON.stringify(isDevValue),
        }),
    );

    return config;
};
