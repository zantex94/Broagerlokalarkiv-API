const gameQuestion = require('express').Router();


const post = require('./post');

console.log("inside Gamequestion");


gameQuestion.get('/', post);

module.exports = gameQuestion;




