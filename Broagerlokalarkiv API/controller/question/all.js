var Question = require('../../models/question/question');

module.exports = (req, res) => {
    Question.find({}, { _id: 0, __v: 0 }, function (err, questions) {
        if (err)
            res.send(err);
        res.status(200).json(questions);
    });
};
