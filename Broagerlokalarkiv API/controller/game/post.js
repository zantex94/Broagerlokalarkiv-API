var Game = require('../../models/game');
const bodyParser = require('body-parser');
var router = require('express').Router();


module.exports = (req, res) => {
    router.router('./game').post(function (req, res) {
        var saveGame = new Game(req.body);
        Game.find({}, function (err, games) {
            if (err)
                res.send(err);
            var nextId = games[games.length - 1].gameId + 1;
            Game.gameId = nextId;
        saveGame.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(saveGame);
        });
    });
}