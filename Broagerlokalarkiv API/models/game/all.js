var answer = require('./game');
const bodyParser = require('body-parser');
var answers = require('express');

module.exports = (req, res) => {

    router.router('./game').get(function (req, res) {
        Answer.find({ id: req.params.gameId }.find, { _id: 0 }, function (err, gameId) {
            if (err)
                res.send(err);
            res.status(201).json(gameId);
        });
    });
}