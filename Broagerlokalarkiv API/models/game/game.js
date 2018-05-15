var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    gameId: bigint,
    name: String,
    date: Int
});
module.exports = mongoose.model('game.js', GameSchema);