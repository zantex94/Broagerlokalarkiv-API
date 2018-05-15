const Question = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Question");

Question.get('/', all);
Question.get('/:questionId', single);
Question.get('/', post);

module.exports = Question;




