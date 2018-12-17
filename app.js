/* Importing modules */
var URLParser   = require('./src/router');
var Model       = require('./src/model/Model');
var TableView   = require('./src/view/TableView');
var SelectorView = require('./src/view/SelectorView');
/* Declaring variables */
var oURLParser  = new URLParser();
var oModel      = new Model('data/laureate.json', 'laureatesDataFired')
var oDropdown   = new Model('data/country.json', 'dropdownLoaded')
var oTableView  = new TableView('tableHeader', 'tableContent')
var oSelectorView = new SelectorView(oURLParser);
document.addEventListener('laureatesDataFired', function() {
    oTableView.renderTable(oModel.filterData(oURLParser, 'table'));
    /* TODO: Перенести в контроллер */
    oSelectorView.renderDropdown(oDropdown._prepareData('dropdown'), 'myDropdown', function(a) {
        oURLParser.changeCountry(a)
        oTableView.renderTable(oModel.filterData(oURLParser, 'table'));
    })
})

import './src/assets/sass/main.sass'