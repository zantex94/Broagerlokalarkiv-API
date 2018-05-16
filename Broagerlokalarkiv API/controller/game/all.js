var Game = require('../../models/game/game');

module.exports = (req, res) => {
    Game.find({}, { _id: 0, _v: 0 }, function (err, gameId) {
        if (err)
            res.send(err);
        res.status(201).json(gameId);
    });
};
