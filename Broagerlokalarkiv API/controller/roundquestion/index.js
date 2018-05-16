const roundQuestion = require('express').Router();

const post = require('./post');

console.log("inside Roundquestion");


roundQuestion.get('/', post);

module.exports = roundQuestion;




