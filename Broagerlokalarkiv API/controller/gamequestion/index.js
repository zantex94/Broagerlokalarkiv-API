const gameQuestion = require('express').Router();


const post = require('./post');

console.log("inside Gamequestion");


gameQuestion.post('/', post);

module.exports = gameQuestion;




