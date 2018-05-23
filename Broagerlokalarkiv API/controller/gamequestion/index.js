const gameQuestion = require('express').Router();
const bodyParser = require('body-parser').json();

const post = require('./post');
const remove = require('./delete');
const put = require('./put');

gameQuestion.post('/', bodyParser, post);
gameQuestion.delete('/:id', remove);
gameQuestion.put('/:id', bodyParser, put);

module.exports = gameQuestion;




