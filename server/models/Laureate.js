const mongoose = require('mongoose')
const settings = {
    regular: {
        type: String
    },
    required: {
        type: String,
        required: true,
        minlength: 1
    },
    unique: {
        type: String,
        required: true,
        unique: true,
        minlength: 1
    },
    object: {
        type: Object
    }
}

module.exports.Laureate = mongoose.model('Laureate', {
    id: settings.unique,
    firstname: settings.required,
    surname: settings.required,
    gender: settings.required,
    born: settings.regular,
    died: settings.regular,
    bornCountry: settings.regular,
    bornCity: settings.regular,
    diedCountry: settings.regular,
    diedCity: settings.regular,
    year: settings.regular,
    category: settings.regular,
    motivation: settings.regular,
    name: settings.regular,
    country: settings.regular,
    city: settings.regular,
    affiliations: settings.object,
    prizes: {
        type: Array,
        default: []
    },
})