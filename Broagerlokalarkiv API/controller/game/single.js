var Game = require('../../models/game/game');
const bodyParser = require('body-parser');


   module.exports = (req, res) => {
        Game.findOne({ }, { _id: 0 }, function (err, gameId) {
            if (err)
                res.send(err);
            res.status(201).json(gameId);
        });
    };
