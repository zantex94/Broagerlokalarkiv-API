const gameQuestion = require('express').Router();
const bodyParser = require('body-parser').json();

const post = require('./post');
const remove = require('./delete');
const put = require('./put');
const all = require('./all');

gameQuestion.post('/', bodyParser, post);
gameQuestion.delete('/:id', remove);
gameQuestion.put('/:id', bodyParser, put);
gameQuestion.get('/', all);

module.exports = gameQuestion;




