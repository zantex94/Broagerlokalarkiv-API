var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    Answer.deleteOne({ answerId: req.params.answerId }, function (err, answers) {
        if (err)
            res.send(err);
        res.status(204).json(answers);
    });
}
