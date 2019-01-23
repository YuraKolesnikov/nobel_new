const mongoose = require('mongoose')
module.exports.Laureate = mongoose.model('Laureate', {
    id: {
        type: Number,
        required: true,
        unique: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    category: {
        type: String,
        required: false,
        minlength: 1
    },
    country: {
        type: String,
        required: true,
        minlength: 1
    }
})