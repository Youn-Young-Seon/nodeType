const express = require('express')
const app = express()
const path = require('path');
const axios = require('axios');

const BADANG_URL = `http://apis.data.go.kr/1160100/service/GetStocDiviInfoService/getDiviInfo`;
const SERVICE_KEY = `NTVoNqBCa6w4WY0zqtP488WlWdVMsK4H4z%2BanvgdokVDEjJOsFtXTI98sRy2NUrAaw3IUMu0izHR0DFo%2F2XqHA%3D%3D`;
const URL = `${BADANG_URL}?serviceKey=${SERVICE_KEY}&resultType=json&pageNo=1&numOfRows=50`;

// const Webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig = require('./webpack.config.js');

// const compiler = Webpack(webpackConfig);
// const devServerOptions = { ...webpackConfig.devServer, open: true };
// const server = new WebpackDevServer(devServerOptions, compiler);

app.use(express.static(path.join(__dirname, 'dist')));

const cors = require('cors');
app.use(cors());

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

const stockApi = async (paramURL) => {
    const response = await axios.get(paramURL);    
    return response;
}

app.get('/api/stock', function(req, res){
    stockApi(URL)
    .then((response) => {
        res.send(response.data.response.body);
    }).catch((e) => {
        console.log(e);
    });
})
