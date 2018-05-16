const question = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Question");

question.get('/', all);
question.get('/:questionId', single);
question.get('/', post);

module.exports = question;




