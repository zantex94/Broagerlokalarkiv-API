var answer = require('./question');
const bodyParser = require('body-parser');
var answers = require('express');

module.exports = (req, res) => {

    router.router('./question/:questionId').get(function (req, res) {
        Answer.findOne({ id: req.params.gameId }.findOne, { _id: 0 }, function (err, questionId) {
            if (err)
                res.send(err);
            res.status(201).json(questionId);
        });
    });
}