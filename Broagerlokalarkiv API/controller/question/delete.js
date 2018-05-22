var Question = require('../../models/question/question');

module.exports = (req, res) => {
    Question.deleteOne({}, function (err, questions) {
        if (err)
            res.send(err);
        res.status(500).json(questions);
    });
}