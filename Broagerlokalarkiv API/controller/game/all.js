var Game = require('../../models/game');
const bodyParser = require('body-parser');
var router = require('express').Router();

module.exports = (req, res) => {

    router.router('./game').get(function (req, res) {
        Game.find({ }, { _id: 0 }, function (err, gameId) {
            if (err)
                res.send(err);
            res.status(201).json(gameId);
        });
    });
}