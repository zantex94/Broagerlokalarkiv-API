var GameQuestion = require('../../models/gamequestion/gamequestion');

module.exports = (req, res) => {
    GameQuestion.deleteOne({ id: req.params.id }, function (err, gameQuestions) {
        if (err)
            res.send(err);
        res.status(500).json(gameQuestions);
    });
}