var gameQuestion = require('../../models/gamequestion/gamequestion');

module.exports = (req, res) => {
    var saveGamequsetions = new gameQuestion(req.body);
    gameQuestion.find({}, function (err, gameQuestions) {
        if (err)
            res.send(err);
        var nextId;
        if (gameQuestion.length > 0) {
            nextId = gameQuestions[gameQuestions.length - 1].id + 1;
        } else {
            nextId = 1;
        }
        gameQuestion.id = nextId;
        saveGamequsetions.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(saveGamequsetions);
        });
    });
};
