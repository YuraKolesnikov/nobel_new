/* Importing modules */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { mongoose } = require('./db/mongoose')
const { Laureate } = require('./models/Laureate')
/* Declaring constants */
const port = process.env.PORT || 3000
const app = express()

/* Using middleware */
app.use(express.static(path.join(__dirname, 'client/public')))
app.use(bodyParser.json())
/* Registering routes */

/* GET Requests */
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/laureates', (req, res) => {
    Laureate.find()
    .then((laureates) => {
        res.send({laureates})
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/laureates/:id', (req, res) => {
    const id = req.params.id
    Laureate.findById(id)
    .then((todo) => {
        if (!todo) {
            res.status(404).send('Unable to find todo item with corresponding id')
        }
        res.send({todo})
    }, (e) => {
        res.status(400).send(e)
    }) 
})

/* POST Requests */
app.post('/laureates', (req, res) => {
    let laureate = new Laureate({
        id: req.body.id,
        name: req.body.name
    })

    laureate.save()
    .then((laureate) => {
        res.send(laureate)
    }, (e) => {
        res.status(400).send(e)
    })
})
/* Listen */
app.listen(port, () => console.log(`App started on port ${port}`))