const mongoose = require('mongoose')
module.exports.Laureate = mongoose.model('Laureate', {
    id: {
        type: String,
        required: true,
        unique: true,
        minlength: 1
    },
    firstname: {
        type: String,
        required: true,
        minlength: 1
    },
    surname: {
        type: String,
        required: true,
        minlength: 1
    }
})