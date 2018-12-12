/* Importing modules */
var URLParser   = require('./src/router');
var Model       = require('./src/model/Model');

/* Declaring variables */
var oURLParser = new URLParser();
var oModel  = new Model('data/laureate.json', 'laureatesDataFired')
var oDropdown = new Model('data/country.json', 'dropDownLoaded')


document.addEventListener('laureatesDataFired', function() {
    console.log(oModel.getData('table'))
    console.log(oDropdown.getData('dropdown'))
})