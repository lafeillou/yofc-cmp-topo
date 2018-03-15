const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    //javascript执行入口文件
    entry: './main.js',
    output: {
        //将所有的依赖的模块合并输出到一个bundle.js文件
        filename: 'bundle.js',
        //将输出文件都放到dist目录下
        path: path.resolve(__dirname, './dist'),
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader?minimize']
        }]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`,
        }),
    ]
};