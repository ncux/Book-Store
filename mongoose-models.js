const mongoose = require('mongoose');

// book schema
let genreSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
});

module.exports = mongoose.model('Books', genreSchema);

