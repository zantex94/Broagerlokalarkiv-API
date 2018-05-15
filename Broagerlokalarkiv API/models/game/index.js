const Game = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Game");

Game.get('/', all);
Game.get('/:gameId', single);
Game.get('/', post);

module.exports = Game;




