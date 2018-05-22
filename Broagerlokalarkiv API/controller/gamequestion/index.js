const gameQuestion = require('express').Router();
const bodyParser = require('body-parser').json();

const post = require('./post');
const remove = require('./delete');

gameQuestion.post('/', bodyParser, post);
gameQuestion.delete('/:id', remove);

module.exports = gameQuestion;




