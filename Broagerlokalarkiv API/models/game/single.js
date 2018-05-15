var answer = require('./game');
const bodyParser = require('body-parser');
var answers = require('express');

module.exports = (req, res) => {

    router.router('./game/:gameId').get(function (req, res) {
        Answer.findOne({ id: req.params.gameId }.findOne, { _id: 0 }, function (err, gameId) {
            if (err)
                res.send(err);
            res.status(201).json(gameId);
        });
    });
}