var Game = require('../../models/game/game');
const bodyParser = require('body-parser');


module.exports = (req, res) => {
    Game.findOne({ gameId: req.params.gameId }, { _id: 0, __v: 0 }, function (err, game) {
        if (err)
            res.send(err);
        res.status(201).json(game);
    });
};
