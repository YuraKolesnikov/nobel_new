const _ = require('lodash')
const { mongoose } = require('./mongoose')
const ObjectID = mongoose.Types.ObjectId
const { Laureate } = require('../models/Laureate')

class MongoDBController { 
    constructor(model) {
        this.MODEL = model
        this.keys = [
            'id', 
            'firstname', 
            'surname', 
            'born', 
            'died', 
            'bornCountry', 
            'bornCity',
            'diedCountry',
            'diedCity',
            'gender',
            'year',
            'category',
            'motivation',
            'affiliations',
            'name',
            'city',
            'country'
        ]
    }

    getLaureates() {
        return this.MODEL.find({})
    }

    getLaureate(req, res) {
        const id = req.params.id
        if (!ObjectID.isValid(id)) {
            return res.status(404).send('Invalid ID!')
        }
        this.MODEL.findById(id)
        .then((laureate) => {
            return !laureate
            ? res.status(404).send('Unable to find laureate with corresponding id')
            : res.send({laureate})
        }) 
        .catch((e) => res.status(400).send(e))
    }

    createLaureate(req, res) {
        const body = _.pick(req.body, this.keys)
        let laureate = new this.MODEL(body)

        laureate.save()
        .then((laureate) => res.send(laureate))
        .catch((e) => res.status(400).send(e))
    }

    deleteLaureate(req, res) {
        const id = req.params.id
        Laureate.findByIdAndRemove(id)
        .then(laureate => {
            return !laureate
            ? res.status(404).send()
            : res.send({laureate})
        })
        .catch((e) => res.status(400).send(e))
    }

    updateLaureate(req, res) {
        const id = req.params.id
        const body = _.pick(req.body, this.keys)
        Laureate.findByIdAndUpdate(id, { $set: body }, {new: true})
        .then(laureate => {
            return !laureate
            ? res.status(404).send()
            : res.send({laureate})
        })
        .catch((e) => res.status(400).send(e))
    }

    filterByCategory(req, res) {
        const firstname = req.params.firstname
        this.MODEL.find({firstname})
        .then((laureates) => {
            return !laureates
            ? res.status(404).send('Unable to find laureates with corresponding name')
            : res.send({laureates})
        }) 
        .catch((e) => res.status(400).send(e))
    }
}

module.exports = { MongoDBController }