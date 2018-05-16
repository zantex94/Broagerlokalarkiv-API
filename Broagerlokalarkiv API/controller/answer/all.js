var answer = require('./answer');
const bodyParser = require('body-parser');
var router = require('express').Router()


module.exports = (req, res) => {

    router.Router('./answer').get(function (req, res) {
        answer.find({ }, { _id: 0 }, function (err, answer) {
            if (err)
                res.send(err);
            res.status(201).json(answer);
        });
    });
}