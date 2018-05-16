var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    gameId: Number,
    name: String,
    date: Number
});
module.exports = mongoose.model('game', GameSchema);