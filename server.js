const express = require('express')
const app = express()
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'dist')));


const { sequelize } = require('./models');
sequelize.sync({ force: false})
.then(() => {
    console.log('db연결 성공');
})
.catch((err) => {
    console.log(err);
});



const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('express');
})

const cors = require('cors');
app.use(cors());


const menu = require('./routes/menu');
app.use('/menu', menu);

const api = require('./routes/api');
app.use('/api', api);



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})