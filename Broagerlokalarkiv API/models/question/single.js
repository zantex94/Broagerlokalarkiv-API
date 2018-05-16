var question = require('./question');
const bodyParser = require('body-parser');
var questions = require('express').Router();

module.exports = (req, res) => {

    questions.router('./question/:questionId').get(function (req, res) {
        question.findOne({ id: req.params.gameId }.findOne, { _id: 0 }, function (err, questionId) {
            if (err)
                res.send(err);
            res.status(201).json(questionId);
        });
    });
}