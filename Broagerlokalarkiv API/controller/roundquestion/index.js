const roundQuestion = require('express').Router();
const bodyParser = require('body-parser').json();

const post = require('./post');
const remove = require('./delete');

roundQuestion.post('/', bodyParser, post);
roundQuestion.delete('/:id', remove);
module.exports = roundQuestion;




