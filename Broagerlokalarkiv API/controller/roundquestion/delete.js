var RoundQuestion = require('../../models/roundquestion/roundquestion');

module.exports = (req, res) => {
    RoundQuestion.deleteOne({ id: req.params.id }, function (err, roundQuestion) {
        if (err)
            res.send(err);
        res.status(204).json(roundQuestion);
    });
}