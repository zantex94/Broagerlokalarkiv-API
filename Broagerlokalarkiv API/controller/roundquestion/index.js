const roundQuestion = require('express').Router();

const post = require('./post');

console.log("inside Roundquestion");


roundQuestion.post('/', post);

module.exports = roundQuestion;




