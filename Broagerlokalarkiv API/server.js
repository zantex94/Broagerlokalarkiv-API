var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = require('./controller'); 


app.use(express.static('public'));

// make db connection

mongoose.connect('mongodb://localhost:27017/broagerlandsarkivDB');

// routing




router.use(function (req, res, next) {
    // added to response
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, content-type, Access-Control-Allow-Origin");
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTION');
    //console.log("some action happens!");
    next();
});

app.use('/', router); // could put in a prefix


// server start 
app.listen(3000, () => {
    console.log("Connected");
});

