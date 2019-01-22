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
    }
})