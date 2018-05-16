var game = require('./game');
const bodyParser = require('body-parser');
var games = require('express').Router();

module.exports = (req, res) => {

    games.router('./game').get(function (req, res) {
        game.find({ id: req.params.gameId }.find, { _id: 0 }, function (err, gameId) {
            if (err)
                res.send(err);
            res.status(201).json(gameId);
        });
    });
}