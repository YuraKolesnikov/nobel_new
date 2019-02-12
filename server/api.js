const express = require('express')
const bodyParser = require('body-parser')

const { Laureate } = require('./models/Laureate')
const { MongoDBController } = require('./db/MongoDBContoller')

const mongoDBController = new MongoDBController(Laureate)
const router = express.Router()
router.use(bodyParser.json())

/* GET Requests */
router.get('/', async (req, res) => {
    const laureates = await Laureate.find({})
    res.status(200).json(laureates)
})

router.get('/laureates', async (req, res) => {
    const data = await mongoDBController.fetchCollection()
    res.status(200).json(data)
})

router.get('/laureates/filterByName', (req, res) => {
    mongoDBController.fetchDocument(req, res)
})

router.get('/laureates/category/:category', (req, res) => {
    mongoDBController.filterByCategory(req, res)
})

router.get('/laureates/:firstCategory/:firstParameter/:secondCategory/:secondParameter', (req, res) => {
    mongoDBController.filterByDynamicCategory(req, res)
})

/* POST Requests */
router.post('/laureates/add', (req, res) => {
    mongoDBController.createDocument(req, res)
})

/* DELETE Requests */
router.delete('/laureates/delete/:id', (req, res) => {
    mongoDBController.deleteDocument(req, res)
})

/* PATCH Requests */
router.patch('/laureates/update/:id', (req, res) => {
    mongoDBController.updateDocument(req, res)
})

module.exports = router