var Question = require('../../models/question');
const bodyParser = require('body-parser');
var router = require('express').Router();

module.exports = (req, res) => {

    router.router('./question').get(function (req, res) {
        Question.find({ }, { _id: 0 }, function (err, questionId) {
            if (err)
                res.send(err);
            res.status(201).json(questionId);
        });
    });
}