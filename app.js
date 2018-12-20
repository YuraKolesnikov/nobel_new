var Model = require('./model/Model');
//var DropdownModel = require('./model/DropdownModel');
var TableModel = require('./model/TableModel');
var model = new Model('data/laureate.json', 'dataLoaded')
//var dropdownModel = new DropdownModel('data/country.json', 'dropdownDataLoaded');
var tableModel = new TableModel('data/laureate.json', 'tableDataLoaded')
//setTimeout(() => console.log(model.getData()), 1000)
//setTimeout(() => console.log(dropdownModel.getData()), 1000)
//setTimeout(() => console.log(tableModel.filterData({first: 'all', second: 'all', third: 'all'})), 1000)

var View = require('./view/View')
var view = new View();
var Controller = require('./controller/Controller')
var controller = new Controller(tableModel, view)