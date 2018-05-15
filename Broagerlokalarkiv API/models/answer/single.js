var answer = require('./answer');
const bodyParser = require('body-parser');
var answers = require('express');
var router = express.Router();

module.exports = (req, res) => {

    router.router('./answer/:answerId').get(function (req, res) {
        Answer.findOne({ id: req.params.answerId }.findOne, { _id: 0 }, function (err, answer) {
            if (err)
                res.send(err);
            res.status(201).json(answer);
        });
    });
}