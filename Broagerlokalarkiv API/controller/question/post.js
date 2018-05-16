var Question = require('../../models/question/question');
const bodyParser = require('body-parser');

    module.exports = (req, res) => {
        var question = new Question(req.body);
        Question.find({}, function (err, questions) {
            if (err)
                res.send(err);
            var nextId = questions[questions.length - 1].questionId + 1;
            Question.questionId = nextId;
        question.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(question);
        });
        });
    };
