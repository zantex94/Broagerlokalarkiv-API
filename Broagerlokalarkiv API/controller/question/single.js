var Question = require('../../models/question/question');

module.exports = (req, res) => {
    Question.findOne({ questionId: req.params.questionId }, { _id: 0, __v:0 }, function (err, question) {
        if (err)
            res.send(err);
        res.status(201).json(question);
    });
};
