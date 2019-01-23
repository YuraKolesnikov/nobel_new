const { Laureate } = require('../models/Laureate')
const _ = require('lodash')
class DBController { 
    constructor(model) {
        this.MODEL = model
    }

    fetchCollection(req, res) {
        this.MODEL.find()
        .then((laureates) => res.send({laureates}))
        .catch((e) => res.status(400).send(e))
    }

    fetchDocument(req, res) {
        const id = req.params.id
        this.MODEL.findById(id)
        .then((laureate) => {
            return !laureate
            ? res.status(404).send('Unable to find laureate with corresponding id')
            : res.send({laureate})
        }) 
        .catch((e) => res.status(400).send(e))
    }

    filterByCategory(req, res) {
        const category = req.params.category
        this.MODEL.find({category})
        .then((laureates) => {
            return !laureates
            ? res.status(404).send('Unable to find laureates with corresponding category')
            : res.send({laureates})
        }) 
        .catch((e) => res.status(400).send(e))
    }
    
    createDocument(req, res) {
        const body = _.pick(req.body, ['id', 'name', 'category', 'country'])
        let laureate = new this.MODEL(body)

        laureate.save()
        .then((laureate) => res.send(laureate))
        .catch((e) => res.status(400).send(e))
    }
}

module.exports = { DBController }