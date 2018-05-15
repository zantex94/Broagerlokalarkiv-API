var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamequestionSchema = new Schema({
    id: Int,
    name: String,
    date: Int
});
module.exports = mongoose.model('gamequestion.js', GamequestionSchema);