var GameQuestion = require('../../models/gamequestion/gamequestion');

module.exports = (req, res) => {
    var gameQuestion = req.body;
    GameQuestion.findOneAndUpdate({ id: req.params.id }, { $set: gameQuestion }, function (err, gameQuestion) {
        if (err)
            res.send(err);
        res.status(205).json({ gameQuestion });
    });
};
