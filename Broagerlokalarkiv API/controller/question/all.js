var Question = require('../../models/question/question');
const bodyParser = require('body-parser');

    module.exports = (req, res) => {
        Question.find({ }, { _id: 0 }, function (err, questionId) {
            if (err)
                res.send(err);
            res.status(201).json(questionId);
        });
    };
