var RoundQuestion = require('../../models/roundquestion/roundquestion');

module.exports = (req, res) => {
    var saveRoundquestion = new RoundQuestion(req.body);
    RoundQuestion.find({}, { _id: 0, __v: 0 },function (err, roundQuestions) {
        if (err)
            res.send(err);
        var nextId
        if (roundQuestions.length > 0) {
            var nextId = roundQuestions[roundQuestions.length - 1].id + 1;
        } else {
            nextId = 1;
        }
        saveRoundquestion.id = nextId;
        saveRoundquestion.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(saveRoundquestion);
        });
    });
};
