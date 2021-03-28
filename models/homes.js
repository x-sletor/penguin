const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

module.exports.Home = mongoose.model("homes", homeSchema);