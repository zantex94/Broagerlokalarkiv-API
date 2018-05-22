var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    Answer.deleteOne({}, function (err, answers) {
        if (err)
            res.send(err);
        res.status(500).json(answers);
    });
}
