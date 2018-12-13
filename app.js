/* Importing modules */
var URLParser   = require('./src/router');
var Model       = require('./src/model/Model');

/* Declaring variables */
var oURLParser  = new URLParser();
var oModel      = new Model('data/laureate.json', 'laureatesDataFired')
var oDropdown   = new Model('data/country.json', 'dropDownLoaded')
var button      = document.getElementById('button')
var chemistry   = document.getElementById('chemistry')

document.addEventListener('laureatesDataFired', function() {
    console.log(oModel.getData(oURLParser, 'table'))
    button.addEventListener('click', function() {
        console.log(oModel.sortData(oURLParser, 'name', 'table'))
    })
    chemistry.addEventListener('click', function() {
        oURLParser.changeCategory('chemistry')
        console.log(oModel.filterData(oURLParser, 'table'))
    })
})