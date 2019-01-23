/* Importing modules */
const express = require('express')
const path = require('path')
const api = require('./api')
/* Declaring constants */
const port = process.env.PORT || 3000
const app = express()

/* Using middleware */
app.use(express.static(path.join(__dirname, 'client/public')))
app.use('/api', api)

/* Listen */
app.listen(port, () => console.log(`App started on port ${port}`))