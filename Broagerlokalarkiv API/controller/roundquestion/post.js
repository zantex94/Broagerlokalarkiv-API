var RoundQuestion = require('../../models/roundquestion');
const bodyParser = require('body-parser');
var router = require('express').Router();


module.exports = (req, res) => {
    router.router('./roundquestion').post(function (req, res) {
        var saveRoundquestion = new RoundQuestion(req.body);
        RoundQuestion.find({}, function (err, roundQuestions) {
            if (err)
                res.send(err);
            var nextId = roundQuestions[roundQuestions.length - 1].id + 1;
            RoundQuestion.id = nextId;
        saveRoundquestion.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(saveRoundquestion);
        });
    });
}