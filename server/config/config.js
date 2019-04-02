const path = require('path')
module.exports = {
  MongoURI: 'mongodb://localhost:27017/NobelLaureates',
  port: process.env.PORT || 3000,
  publicPath: path.join(__dirname, '../client/public')
}