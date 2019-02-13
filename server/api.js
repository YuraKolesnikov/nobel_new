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
    const data = await dataHandler.getLaureates()
    res.status(200).json(data)
})

router.get('/laureates/:id', (req, res) => {
    dataHandler.getLaureate(req, res)
})

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