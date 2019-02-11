const _ = require('lodash')
const { DBController } = require('./db/DBContoller')
const { Laureate } = require('./models/Laureate')
const dbController = new DBController(Laureate)

class DataHandler { 
    constructor() {
        
    }

    async getLaureates() {
      console.log("dh 1");
      const data = await dbController.fetchCollection();
      //console.log(data);
      console.log("dh 2");
      return data;
    }
}

module.exports = { DataHandler }