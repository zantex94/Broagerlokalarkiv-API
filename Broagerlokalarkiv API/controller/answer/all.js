var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    Answer.find({}, { _id: 0, __v: 0 }, function (err, answers) {
        if (err)
            res.send(err);
        res.status(200).json(answers);
    });
};