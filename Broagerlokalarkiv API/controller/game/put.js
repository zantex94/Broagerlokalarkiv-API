var Game = require('../../models/game/game');

module.exports = (req, res) => {
    var game = req.body;
    Game.findOneAndUpdate({ gameId: req.params.gameId }, { $set: game }, function (err, game) {
        if (err)
            res.send(err);
        res.status(205).json({ game });
    });
};
