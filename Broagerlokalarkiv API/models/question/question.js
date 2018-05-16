var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    questionId: Number,
    description: String,
    questionType: String,
    picture: String,
    hint: String
});
module.exports = mongoose.model('question', QuestionSchema);