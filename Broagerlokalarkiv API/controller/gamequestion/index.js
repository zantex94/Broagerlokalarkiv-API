const gameQuestion = require('express').Router();
const bodyParser = require('body-parser').json();

const post = require('./post');

gameQuestion.post('/', bodyParser, post);

module.exports = gameQuestion;




