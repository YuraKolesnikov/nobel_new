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
        const {id} = req.params
        if (!ObjectID.isValid(id)) {
            return res.status(404).send('Invalid ID!')
        }
        this.MODEL.findById(id)
        .then((laureate) => {
            return !laureate
            ? res.status(404).send()
            : res.status(200).send({laureate})
        }) 
        .catch((e) => res.status(400).send(e))
    }

    createLaureate(req, res) {
        const body = _.pick(req.body, this.keys)
        console.log(body)
        const payload = {
            id: body.id,
            firstname: body.firstname,
            surname: body.surname,
            born: body.born,
            died: body.died,
            bornCountry: body.bornCountry,
            bornCountryCode: body.bornCountryCode,
            bornCity: body.bornCity,
            diedCountry: body.diedCountry,
            diedCountryCode: body.diedCountryCode,
            diedCity: body.diedCity,
            gender: body.gender,
            prizes: [
                { 
                    year: body.year, 
                    category: body.category, 
                    motivation: body.motivation,
                    affiliations: [
                        { name: body.name, city: body.city, country: body.country }
                    ]
                }
            ]
        }
        let laureate = new this.MODEL(payload)

        laureate.save()
        .then((laureate) => res.status(200).send(laureate))
        .catch((e) => res.status(400).send(e))
    }

    deleteLaureate(req, res) {
        const {id} = req.params
        console.log(`ID: ${id}`)
        Laureate.findOneAndDelete({id})
        .then(laureate => {
            return !laureate
            ? res.status(404).send()
            : res.status(200).send(laureate)
        })
        .catch((e) => res.status(400).send(e))
    }

    updateLaureate(req, res) {
        const {id} = req.params
        const body = _.pick(req.body, this.keys)
        Laureate.findOneAndUpdate({id: id}, { $set: body }, {new: true})
        .then(laureate => {
            return !laureate
            ? res.status(404).send()
            : res.status(200).send(laureate)
        })
        .catch((e) => res.status(400).send(e))
    }

    filterByCategory(req, res) {
        const {firstname} = req.params
        this.MODEL.find({firstname})
        .then((laureates) => {
            return !laureates
            ? res.status(404).send('Unable to find laureates with corresponding name')
            : res.status(200).send({laureates})
        }) 
        .catch((e) => res.status(400).send(e))
    }
}

module.exports = { MongoDBController }