var Answer = require('../../models/answer/answer');
const bodyParser = require('body-parser');

module.exports = (req, res) => {
    Answer.find({}, { _id: 0, _v:0 }, function (err, answer) {
        if (err)
            res.send(err);
        res.status(201).json(answer);
    });
};