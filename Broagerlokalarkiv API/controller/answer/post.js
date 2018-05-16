var Answer = require('../../models/answer');
const bodyParser = require('body-parser');
var router = require('express').Router();


module.exports = (req, res) => {
    router.route('./answer').post(function (req, res) {
        var answer = new Answer(req.body);
        Answer.find({}, function (err, answers) {
            if (err)
                res.send(err);
            var nextId = answers[answers.length - 1].answerId + 1;
            answer.answerId = nextId;
            answer.save(function (err) {
                if (err)
                    res.send(err);
                res.status(201).json(answer);
            });
        })
       
    });
}