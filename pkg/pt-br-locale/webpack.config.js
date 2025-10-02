const path = require('path');

module.exports = {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'pt-br-locale.umd.min.js',
        library: {
            name: 'pt-br-locale',
            type: 'umd',
            export: 'default'
        },
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        compilerOptions: {
                            module: 'esnext'
                        }
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        vue: 'Vue'
    }
};