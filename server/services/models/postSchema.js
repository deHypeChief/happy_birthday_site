var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    name: String,
    message: String,
    img: String,
});
 
module.exports = mongoose.model('Post', postSchema);