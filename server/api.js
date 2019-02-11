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
router.get('/', async (req, res) => {
    const laureates = await Laureate.find({})
    res.status(200).json(laureates)
})

router.get('/laureates', async (req, res) => {
    const data = await dbController.fetchCollection()
    res.status(200).json(data)
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