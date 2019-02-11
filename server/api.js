const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const { mongoose } = require('./db/mongoose')
const { Laureate } = require('./models/Laureate')
const { DBController } = require('./db/DBContoller')

const dbController = new DBController(Laureate)
const router = express.Router()
router.use(bodyParser.json())
/* GET Requests */
router.get('/', (req, res) => {
    res.send('Hello world!')
})

router.get('/laureates', (req, res) => {
    dbController.fetchCollection(req, res)
})

router.get('/laureates/filterByName', (req, res) => {
    dbController.fetchDocument(req, res)
})

router.get('/laureates/category/:category', (req, res) => {
    dbController.filterByCategory(req, res)
})

router.get('/laureates/:firstCategory/:firstParameter/:secondCategory/:secondParameter', (req, res) => {
    dbController.filterByDynamicCategory(req, res)
})

/* POST Requests */
router.post('/laureates', (req, res) => {
    dbController.createDocument(req, res)
})

/* DELETE Requests */
router.delete('/laureates/:id', (req, res) => {
    dbController.deleteDocument(req, res)
})

/* PATCH Requests */
router.patch('/laureates/:id', (req, res) => {
    dbController.updateDocument(req, res)
})

module.exports = router