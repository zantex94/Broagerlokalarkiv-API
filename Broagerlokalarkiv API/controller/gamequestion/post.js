var GameQuestion = require('../../models/gamequestion/gamequestion');

module.exports = (req, res) => {
    var saveGamequsetions = new GameQuestion(req.body);
    GameQuestion.find({}, function (err, gameQuestions) {
        if (err)
            res.send(err);
        var nextId;
        if (GameQuestion.length > 0) {
            nextId = gameQuestions[gameQuestions.length - 1].id + 1;
        } else {
            nextId = 1;
        }
        saveGamequsetions.id = nextId;
        saveGamequsetions.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(saveGamequsetions);
        });
    });
};
