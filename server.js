const express = require('express')
const app = express()
const path = require('path');

// const Webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig = require('./webpack.config.js');

// const compiler = Webpack(webpackConfig);
// const devServerOptions = { ...webpackConfig.devServer, open: true };
// const server = new WebpackDevServer(devServerOptions, compiler);

app.use(express.static(path.join(__dirname + 'dist')));

const cors = require('cors');
const corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions));

// const runServer = async () => {
//     console.log('Starting server...');
//     await server.start();
// };

app.listen(5000, function(){
    console.log('express');
    // runServer();
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})
  
app.get('/api', function(req, res){
    res.json({'ddddd': 1234})
})