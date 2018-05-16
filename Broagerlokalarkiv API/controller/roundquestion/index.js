const roundQuestion = require('express').Router();
const bodyParser = require('body-parser').json();

const post = require('./post');

roundQuestion.post('/', bodyParser, post);

module.exports = roundQuestion;




