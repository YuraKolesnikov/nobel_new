/* Importing modules */
var URLParser   = require('./src/router');
var Model       = require('./src/model/Model');
var TableView   = require('./src/view/TableView');
/* Declaring variables */
var oURLParser  = new URLParser();
var oModel      = new Model('data/laureate.json', 'laureatesDataFired')
var oDropdown   = new Model('data/country.json', 'dropdownLoaded')
var oTableView  = new TableView('tableHeader', 'tableContent')

document.addEventListener('laureatesDataFired', function() {
    console.log(oModel.getData(oURLParser, 'table'))
    oURLParser.changeCategory('chemistry')
    oTableView.renderTable(oModel.sortData(oURLParser, 'age', 'table')); 
    oTableView.renderTable(oModel.sortData(oURLParser, 'name', 'table'));
})

import './src/assets/sass/main.sass'