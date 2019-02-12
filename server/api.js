const express = require('express')
const bodyParser = require('body-parser')

const { Laureate } = require('./models/Laureate')
const { MongoDBController } = require('./db/MongoDBContoller')
const { DataHandler } = require('./db/DataHandler')

const mongoDBController = new MongoDBController(Laureate)
const dataHandler = new DataHandler(mongoDBController)
const router = express.Router()
router.use(bodyParser.json())

/* GET Requests */
router.get('/laureates', async (req, res) => {
    const data = await dataHandler.fetchLaureates()
    res.status(200).json(data)
})

/* localhost:3000/api/laureates/5c6173de5a6fa337d45b907b - should return Wilhem Conrad */
router.get('/laureates/:id', (req, res) => {
    dataHandler.fetchLaureate(req, res)
})

/* router.get('/laureates/category/:category', (req, res) => {
    mongoDBController.filterByCategory(req, res)
})

router.get('/laureates/:firstCategory/:firstParameter/:secondCategory/:secondParameter', (req, res) => {
    mongoDBController.filterByDynamicCategory(req, res)
}) */

/* POST Requests */
router.post('/laureates/add', async (req, res) => {
    await dataHandler.createLaureate(req, res)
})

/* DELETE Requests */
router.delete('/laureates/delete/:id', async (req, res) => {
    await dataHandler.deleteLaureate(req, res)
})

/* PATCH Requests */
router.patch('/laureates/update/:id', async (req, res) => {
    await dataHandler.updateLaureate(req, res)
})

module.exports = router