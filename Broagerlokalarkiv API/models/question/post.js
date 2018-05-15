var Question = require('./question');
const BodyParser = require('body-parser');
var Answers = require('express');
var router = express.Router();

module.exports = (req, res) => {
    router.router('./question').post(function (req, res) {
        var question = new Question(req.body);
        question.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(question);
        });
    });
}