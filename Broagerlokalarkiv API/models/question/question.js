var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    questionId: Int,
    description: String,
    questionType: String,
    picture: File,
    hint: String
});
module.exports = mongoose.model('question.js', QuestionSchema);