const game = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Game");

game.get('/', all);
game.get('/:gameId', single);
game.get('/', post);

module.exports = game;




