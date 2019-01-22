/* Importing modules */
const express = require('express')
const path = require('path')
/* Declaring constants */
const port = process.env.PORT || 3000
const app = express()

/* Using middleware */
app.use(express.static(path.join(__dirname, 'client/public')))

/* Registering routes */

/* GET Routes */
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/laureates', (req, res) => {
    res.send('Laureates page')
})

app.get('/laureates/:id', (req, res) => {
    res.send(`Laureate id: ${req.params.id}`)
})

/* POST Routes */

/* Listen */
app.listen(port, () => console.log(`App started on port ${port}`))