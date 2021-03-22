const mongoose = require('mongoose');

const cashSchema = new mongoose.Schema({
    _id: Number,
    datetime: String,
    qty: Number,
    price: Number,
    status: String
});

module.exports.Cash = mongoose.model("Cash", cashSchema);