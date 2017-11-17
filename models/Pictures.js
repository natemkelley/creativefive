var mongoose = require('mongoose');

var pictureSchema = new mongoose.Schema({
    url: String,
    caption: String
    // upvotes: {
    //     type: Number,
    //     default: 0
    // },
});
//
// CommentSchema.methods.upvote = function (cb) {
//     this.upvotes += 1;
//     this.save(cb);
// };

mongoose.model('Picture', pictureSchema);
