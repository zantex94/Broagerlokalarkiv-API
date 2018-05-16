var gamequestion = require('./answer');
const BodyParser = require('body-parser');
var gamequestions = require('express').Router;


module.exports = (req, res) => {
    router.router('./answer').post(function (req, res) {
        var answer = new Answer(req.body);
        answer.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(answer);
        });
    });
}