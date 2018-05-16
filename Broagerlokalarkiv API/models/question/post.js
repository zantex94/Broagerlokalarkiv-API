var question = require('./question');
const bodyParser = require('body-parser');
var questions = require('express').Router();


module.exports = (req, res) => {
    questions.router('./question').post(function (req, res) {
        var question = new Question(req.body);
        question.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(question);
        });
    });
}