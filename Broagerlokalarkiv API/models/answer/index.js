const answer = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Answer");

answer.get('/', all);
answer.get('/:answerId', single);
answer.get('/', post);

module.exports = answer;




