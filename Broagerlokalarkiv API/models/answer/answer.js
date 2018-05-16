var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerId: Int,
    description: String,
    answerType: String,
    picture: File
});
module.exports = mongoose.model('answer', AnswerSchema);