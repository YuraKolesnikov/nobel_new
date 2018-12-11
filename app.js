var URLParser = require('./src/router');
var Model   = require('./src/model/Model');
var oURLParser = new URLParser();
var oModel  = new Model('data/laureate.json', 'laureatesDataFired')
document.addEventListener('laureatesDataFired', function() {
    console.log(oModel)
})