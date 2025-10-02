const path = require('path');

module.exports = {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'pt-br-locale.umd.min.js',
        library: 'pt-br-locale',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        vue: 'Vue'
    }
};