/* Importing modules */
const express = require('express')
const api     = require('./api')
const config  = require('./config/config')

/* Declaring constants */
const app = express()

/* Using middleware */
app.use(express.static(config.publicPath))
app.use('/api', api)


/* Listen */
app.listen(config.port, () => console.log(`App started on port ${config.port}`))