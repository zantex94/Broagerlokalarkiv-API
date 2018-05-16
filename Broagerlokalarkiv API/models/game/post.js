var game = require('./game');
const bodyParser = require('body-parser');
var games = require('express').Router();


module.exports = (req, res) => {
    games.router('./game').post(function (req, res) {
        var saveGame = new game(req.body);
        saveGame.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(saveGame);
        });
    });
}