const Answer = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Answer");

Answer.get('/', all);
Answer.get('/:answerId', single);
Answer.get('/', post);

module.exports = Answer;




