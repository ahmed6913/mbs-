const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    customer: String,
    items: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    total: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bill', billSchema);