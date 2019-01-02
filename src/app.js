import TableModel from './model/TableModel'
import TableView from './view/TableView'
import View from './view/View'
import Controller from './controller/Controller'
import SelectorModel from './model/SelectorModel'
import SelectorView from './view/SelectorView'
import './sass/main.sass'
const table = new TableModel('./data/laureate.json')
const view  = new TableView('laureates')


const tableView     = new TableView('laureates')
const countrySelectorModel = new SelectorModel('./data/country.json')
const countrySelectorView = new SelectorView('countrySelector');
setTimeout(() => {
    countrySelectorView.renderDropdown(countrySelectorModel.getData())
}, 1500)
const controller    = new Controller(table, view, countrySelectorView)