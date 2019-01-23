const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const { mongoose } = require('./db/mongoose')
const { Laureate } = require('./models/Laureate')

const router = express.Router()
router.use(bodyParser.json())

/* GET Requests */
router.get('/', (req, res) => {
    res.send('Hello world!')
})

router.get('/laureates', (req, res) => {
    Laureate.find()
    .then((laureates) => res.send({laureates}))
    .catch((e) => res.status(400).send(e))
})

router.get('/laureates/:id', (req, res) => {
    const id = req.params.id
    Laureate.findById(id)
    .then((laureate) => {
        return !laureate
        ? res.status(404).send('Unable to find laureate with corresponding id')
        : res.send({laureate})
    }) 
    .catch((e) => res.status(400).send(e))
})

router.get('/laureates/category/:category', (req, res) => {
    const category = req.params.category
    Laureate.find({category})
    .then((laureates) => {
        return !laureates
        ? res.status(404).send('Unable to find laureates with corresponding category')
        : res.send({laureates})
    }) 
    .catch((e) => res.status(400).send(e))
})

router.get('/laureates/category/:category/country/:country', (req, res) => {
    const category = req.params.category
    const country = req.params.country
    Laureate.find({category, country})
    .then((laureates) => {
        return !laureates
        ? res.status(404).send('Unable to find laureates with corresponding category')
        : res.send({laureates})
    })
    .catch((e) => res.status(400).send(e))
})

/* POST Requests */
router.post('/laureates', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    let laureate = new Laureate({id, name})

    laureate.save()
    .then((laureate) => res.send(laureate))
    .catch((e) => res.status(400).send(e))
})

/* DELETE Requests */
router.delete('/laureates/:id', (req, res) => {
    const id = req.params.id
    Laureate.findByIdAndRemove(id)
    .then((laureate) => {
        return !laureate
        ? res.status(404).send()
        : res.send({laureate})
    })
    .catch((e) => res.status(400).send(e))
})

/* PATCH Requests */
router.patch('/laureates/:id', (req, res) => {
    const id = req.params.id
    const body = _.pick(req.body, ['name', 'category', 'country'])
    Laureate.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then((laureate) => {
        return !laureate
        ? res.status(404).send()
        : res.send({laureate})
    })
    .catch((e) => res.status(400).send(e))
})
module.exports = router