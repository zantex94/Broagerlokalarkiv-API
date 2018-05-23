var RoundQuestion = require('../../models/roundquestion/roundquestion');

module.exports = (req, res) => {
    var roundQuestion = req.body;
    RoundQuestion.findOneAndUpdate({ id: req.params.id }, { $set: roundQuestion }, function (err, roundQuestion) {
        if (err)
            res.send(err);
        res.status(205).json({ roundQuestion });
    });
};
