const router = require('express').Router();
const { Stock } = require('../models');

router.get('/store', function(req, res){
    Stock.findAll({})
    .then(data => {
        res.json(data);        
    })
    .catch(error => {
        new Error(error);
    });
})

module.exports = router;