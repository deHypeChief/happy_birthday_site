var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    name: String,
    message: String,
    img: {
        data: Buffer,
        contentType: String
    }
});
 
module.exports = mongoose.model('Post', postSchema);