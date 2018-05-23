var Question = require('../../models/question/question');

module.exports = (req, res) => {
    Question.deleteOne({ questionId: req.params.questionId }, function (err, questions) {
        if (err)
            res.send(err);
        res.status(500).json(questions);
    });
}