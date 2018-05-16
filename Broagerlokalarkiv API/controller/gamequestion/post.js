var gameQuestion = require('../../models/gamequestion/gamequestion');
const BodyParser = require('body-parser');

    module.exports = (req, res) => {
        gameQuestion.find({}, function (err, gameQuestions) {
            if (err)
                res.send(err);
            var nextId = gameQuestions[gameQuestions.length - 1].id + 1;
            gameQuestion.Id = nextId;
        var saveGamequsetions = new gameQuestion(req.body);
        saveGamequsetions.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(saveGamequsetions);
        });
        });
    };
     