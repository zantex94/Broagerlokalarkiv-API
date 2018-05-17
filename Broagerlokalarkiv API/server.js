var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = require('./controller');

app.use(express.static('public'));

// make db connection

mongoose.connect('mongodb://localhost:27017/broagerlandsarkivDB');

// routing

app.use('/', router); // could put in a prefix

// server start 
app.listen(3000, () => {
    console.log("Connected");
});

