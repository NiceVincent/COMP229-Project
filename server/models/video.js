// Geng Wei, Tu | 301337045
let mongoose = require('mongoose');
let videosModel = mongoose.Schema({
    name: String,
    videoLink: String,
    notes: String,
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    syncStatus: {
        type: Number,
        default: 0,
    },
    predictResult: String,
    comments: String,
}, {
    collection: "video"
});

module.exports = mongoose.model('video', videosModel);