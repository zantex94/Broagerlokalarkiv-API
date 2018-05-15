const Gamequestion = require('express').Router();


const post = require('./post');

console.log("inside Gamequestion");


Gamequestion.get('/', post);

module.exports = Gamequestion;




