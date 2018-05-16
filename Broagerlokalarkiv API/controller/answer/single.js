var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    Answer.findOne({ id: req.params.answerId }, { _id: 0, _v: 0 }, function (err, answer) {
        if (err)
            res.send(err);
        res.status(201).json(answer);
    });
};
