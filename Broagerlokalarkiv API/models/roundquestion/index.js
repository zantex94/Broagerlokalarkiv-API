const Roundquestion = require('express').Router();

const post = require('./post');

console.log("inside Roundquestion");


Roundquestion.get('/', post);

module.exports = Roundquestion;




