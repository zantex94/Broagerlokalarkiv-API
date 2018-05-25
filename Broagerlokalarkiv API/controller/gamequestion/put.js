var GameQuestion = require('../../models/gamequestion/gamequestion');

module.exports = (req, res) => {
    var gameQuestion = req.body;
    gameQuestion.id = req.params.id;
    GameQuestion.findOneAndUpdate({ id: req.params.id }, { $set: gameQuestion }, function (err, gameQuestion) {
        if (err)
            res.send(err);
        res.status(205).json({ gameQuestion });
    });
};
