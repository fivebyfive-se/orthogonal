const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {

    const conf = {
        mode: 'development',
        // devServer: {
        //     open: false,
        //     openPage: [`client/example.html`],
        //     contentBase: path.join(__dirname, '/'),
        //     watchContentBase: true,
        //     port: 8080,
        //     host: argv.mode === 'production' ? `localhost` : `localhost`,
        //     disableHostCheck: true,
        // },

        entry: {
            'orthogonal': `./src/orthogonal.js`,
            'orthogonal.extensions': `./src/lib/extensions/index.js`,
            'orthogonal.color': `./src/lib/color/index.js`
        },
        output: {
            path: path.join(__dirname, 'dist', '/'),
            filename: argv.mode === 'production' ? `[name].min.js` : `[name].develop.js`,
            library: '',
            libraryExport: '',
            libraryTarget: 'umd',
            globalObject: 'this',
        },
        optimization: {
            minimizer: [new TerserPlugin({
                terserOptions: {
                    mangle: false,
                    compress: {
                        drop_console: true,
                    },
                }
            })],
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                }]
            }]
        },
    };

    if (argv.mode !== 'production') {
        conf.devtool = 'inline-source-map';
    }

    return conf;

};