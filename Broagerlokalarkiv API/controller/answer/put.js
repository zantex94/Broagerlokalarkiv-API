var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    var answer = req.body;
    Answer.findOneAndUpdate({ id: req.params.answerId }, { $set:answer }, function (err, answer) {
        if (err)
            res.send(err);
        res.status(204).json({answer});
    });
};