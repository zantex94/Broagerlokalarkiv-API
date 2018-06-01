var RoundQuestion = require('../../models/roundquestion/roundquestion');

module.exports = (req, res) => {
    RoundQuestion.find({}, { _id: 0, __v: 0 }, function (err, roundQuestions) {
        if (err)
            res.send(err);
        res.status(200).json(roundQuestions);
    });
};