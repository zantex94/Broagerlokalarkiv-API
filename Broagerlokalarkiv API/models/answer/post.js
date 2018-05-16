var answer = require('./answer');
const bodyParser = require('body-parser');
var answers = require('express').Router();


module.exports = (req, res) => {
    answers.router('./answer').post(function (req, res) {
        var answer = new answer(req.body);
        answer.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(bike);
        });
    });
}