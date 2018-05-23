var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    Answer.findOneAndUpdate({ }, {_id:0, __v:0}, function (err, answer) {
        if (err)
            res.send(err);
    });
};
