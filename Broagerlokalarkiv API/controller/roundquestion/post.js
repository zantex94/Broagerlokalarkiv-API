var RoundQuestion = require('../../models/roundquestion/roundquestion');
const bodyParser = require('body-parser');

module.exports = (req, res) => {
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
};
