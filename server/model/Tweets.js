const mongoose = require('mongoose');

const TweetsSchema = new mongoose.Schema({
    handle : {
        type : String,
        required : true,
        min : 1,
    },
    tweets : {
        type : Array,
        required : false,
    }
});

module.exports = mongoose.model('Tweets', TweetsSchema);    