var Game = require('../../models/game/game');

module.exports = (req, res) => {
    Game.deleteOne({}, function (err, games) {
        if (err)
            res.send(err);
        res.status(500).json(games);
    });
}
