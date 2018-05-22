var RoundQuestion = require('../../models/roundquestion/roundquestion');

module.exports = (req, res) => {
    RoundQuestion.deleteOne({}, function (err, RoundQuestions) {
        if (err)
            res.send(err);
        res.status(500).json(RoundQuestions);
    });
}