const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: String,
    price: Number,
    url: String,
    create_time: Date,
    update_time: Date,
})

module.exports = mongoose.model('examples', exampleSchema);
