var GameQuestion = require('../../models/gamequestion/gamequestion');

module.exports = (req, res) => {
    GameQuestion.find({}, { _id: 0, __v: 0 }, function (err, gameQuestions) {
        if (err)
            res.send(err);
        res.status(200).json(gameQuestions);
    });
};