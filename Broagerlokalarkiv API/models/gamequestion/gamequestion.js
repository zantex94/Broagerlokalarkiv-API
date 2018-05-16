var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamequestionSchema = new Schema({
    id: Number,
    gameId: Number,
    questionId: Number
});
module.exports = mongoose.model('gamequestion', GamequestionSchema);