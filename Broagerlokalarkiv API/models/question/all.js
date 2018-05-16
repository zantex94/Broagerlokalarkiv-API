﻿var question = require('./question');
const bodyParser = require('body-parser');
var questions = require('express').Router();

module.exports = (req, res) => {

    questions.router('./question').get(function (req, res) {
        question.find({ id: req.params.gameId }.find, { _id: 0 }, function (err, questionId) {
            if (err)
                res.send(err);
            res.status(201).json(questionId);
        });
    });
}