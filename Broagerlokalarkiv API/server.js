var express = require('express');
var app = express();
var mongoose = require('mongoose');

// remember to code so it increment with one.

// make db connection

mongoose.connect('mongodb://localhost:27017/broagerlandsarkivDB');

// routing

var router = express.Router();


router.use(function (req, res, next) {
    // added to response
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, content-type, Access-Control-Allow-Origin");
    //console.log("some action happens!");
    next();
});

app.use('/', router); // could put in a prefix

// server start 
app.listen(3000, () => {
    console.log("Connected");
});

