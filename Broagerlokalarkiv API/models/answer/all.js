var answer = require('./answer');
const bodyParser = require('body-parser');
var answers = require('express');
var router = express.Router();

module.exports = (req, res) => {

    router.router('./answer').get(function (req, res) {
        Answer.find({ id: req.params.answerId }.find, { _id: 0 }, function (err, answer) {
            if (err)
                res.send(err);
            res.status(201).json(answer);
        });
    });
}