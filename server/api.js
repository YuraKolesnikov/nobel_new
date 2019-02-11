const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
//const { DBController } = require('./db/DBContoller')
const { DataHandler } = require('./DataHandler')

//const dbController = new DBController(Laureate)
const oDataHandler = new DataHandler()
const router = express.Router()
router.use(bodyParser.json())
/* GET Requests */
// router.get('/laureates', async (req, res) => {
//     const laureates = await Laureate.find({})
//     res.status(200).json(laureates)
// })

// returns all laurates list
router.get('/laureates', async (req, res) => {
    console.log("api 1");
    //const data = await dbController.fetchCollection()
    const data = await oDataHandler.getLaureates()
    
    //const data = "hello 2"
    res.status(200).json(data)
})

router

router.get('/laureates/filterByName', (req, res) => {
    //dbController.fetchDocument(req, res)
    oDataHandler.otherMethod();
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