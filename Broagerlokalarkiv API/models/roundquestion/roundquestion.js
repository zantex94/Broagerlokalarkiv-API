var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoundquestionSchema = new Schema({
    id: Number,
    questionId: Number,
    answerId: Number,
    isCorrectAnswer: Boolean

});
module.exports = mongoose.model('roundquestion', RoundquestionSchema);