var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
});
 
module.exports = mongoose.model('Post', postSchema);