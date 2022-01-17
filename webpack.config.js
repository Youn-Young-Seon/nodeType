const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',        
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [                                        
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            }
                        }                    
                    }
                ],
            },
            {
                test: /\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: './dist',
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },
}