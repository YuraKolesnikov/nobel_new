const _ = require('lodash')
class DBController { 
    constructor(model) {
        this.MODEL = model
    }

    fetchCollection() {
        return this.MODEL.find({})
    }

    fetchDocument(req, res) {
        const id = req.query.id
        this.MODEL.find({id})
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

    filterByDynamicCategory(req, res) {
        const firstCategory  = req.params.firstCategory
        const firstParameter = req.params.firstParameter
        const secondCategory = req.params.secondCategory
        const secondParameter = req.params.secondParameter
        console.log(req.params)
        const where = {}
        where[firstCategory] = firstParameter
        where[secondCategory] = secondParameter
        Laureate.find(where)
        .then(laureates => {
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

    deleteDocument(req, res) {
        const id = req.params.id
        Laureate.findByIdAndRemove(id)
        .then(laureate => {
            return !laureate
            ? res.status(404).send()
            : res.send({laureate})
        })
        .catch((e) => res.status(400).send(e))
    }

    updateDocument(req, res) {
        const id = req.params.id
        const body = _.pick(req.body, ['name', 'category', 'country'])
        Laureate.findByIdAndUpdate(id, { $set: body }, {new: true})
        .then(laureate => {
            return !laureate
            ? res.status(404).send()
            : res.send({laureate})
        })
        .catch((e) => res.status(400).send(e))
    }
}

module.exports = { DBController }