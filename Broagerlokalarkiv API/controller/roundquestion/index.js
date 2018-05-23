const roundQuestion = require('express').Router();
const bodyParser = require('body-parser').json();

const post = require('./post');
const remove = require('./delete');
const put = require('./put');
const all = require('./all');

roundQuestion.post('/', bodyParser, post);
roundQuestion.delete('/:id', remove);
roundQuestion.put('/:id', bodyParser, put);
roundQuestion.get('/', all);

module.exports = roundQuestion;




