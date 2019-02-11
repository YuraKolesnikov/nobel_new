/* Importing modules */
const express = require('express')
const path    = require('path')
const api     = require('./api')
/* Declaring constants */
const port = process.env.PORT || 3000
const app = express()
const publicPath = path.join(__dirname, '../client/public')
console.log(publicPath)
/* Using middleware */
app.use('/api', api)
app.use(express.static(publicPath))

/* Listen */
app.listen(port, () => console.log(`App started on port ${port}`))