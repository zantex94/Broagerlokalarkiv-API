var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerId: Number,
    description: String,
    answerType: String,
    picture: String
});
module.exports = mongoose.model('answer', AnswerSchema);