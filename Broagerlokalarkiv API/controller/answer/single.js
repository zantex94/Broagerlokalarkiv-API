var Answer = require('../../models/answer/answer');
const bodyParser = require('body-parser');
var router = require('express').Router();


module.exports = (req, res) => {

    router.router('./answer/:answerId').get(function (req, res) {
        Answer.findOne({ id: req.params.answerId }, { _id: 0 }, function (err, answer) {
            if (err)
                res.send(err);
            res.status(201).json(answer);
        });
    });
}