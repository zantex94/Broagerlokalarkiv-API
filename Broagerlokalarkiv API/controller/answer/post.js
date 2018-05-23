var Answer = require('../../models/answer/answer');

module.exports = (req, res) => {
    var answer = new Answer(req.body);
    Answer.find({}, { _id: 0, __v: 0 }, function (err, answers) {
        if (err)
            res.send(err);
        var nextId;
        if (answers.length > 0) {
            nextId = answers[answers.length - 1].answerId + 1;
        } else {
            nextId = 1;
        }
        answer.answerId = nextId;
        answer.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(answer);
        });
       
    });
        
};