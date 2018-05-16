var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoundquestionSchema = new Schema({
    id: Int,
    isCorrectAnswer: Boolean
});
module.exports = mongoose.model('roundquestion', RoundquestionSchema);