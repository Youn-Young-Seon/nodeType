const express = require('express')
const app = express()
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
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

const passportConfig = require('./passport');
passportConfig();


const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('express');
})

const cors = require('cors');
app.use(cors());


app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));

app.use(passport.initialize());
app.use(passport.session());


const store = require('./routes/store');
app.use('/api', store);

const dashBoard = require('./routes/dashBoard');
app.use('/api', dashBoard);


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})