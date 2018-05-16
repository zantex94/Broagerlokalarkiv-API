var Question = require('../../models/question');
const bodyParser = require('body-parser');
var router = require('express').Router();


module.exports = (req, res) => {
    router.router('./question').post(function (req, res) {
        var question = new Question(req.body);
        Question.find({}, function (err, questions) {
            if (err)
                res.send(err);
            var nextId = questions[questions.length - 1].questionId + 1;
            Question.questionId = nextId;
        question.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(question);
        });
    });
}