﻿var Question = require('../../models/question/question');

module.exports = (req, res) => {
    var question = req.body;
    question.questionId = req.params.questionId;
    Question.findOneAndUpdate({ questionId: req.params.questionId }, { $set: question }, function (err, question) {
        if (err)
            res.send(err);
        res.status(205).json({ question });
    });
};
