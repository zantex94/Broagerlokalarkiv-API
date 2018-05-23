var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    var answer = req.body;
    Answer.findOneAndUpdate({ answerId: req.params.answerId }, {$set: answer}, function (err, answer) {
        if (err)
            res.send(err);
        res.status(205).json({ answer });
    });
};
