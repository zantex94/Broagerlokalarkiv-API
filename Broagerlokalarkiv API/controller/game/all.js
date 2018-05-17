var Game = require('../../models/game/game');

module.exports = (req, res) => {
    Game.find({}, { _id: 0, __v: 0 }, function (err, games) {
        if (err)
            res.send(err);
        res.status(201).json(games);
    });
};
