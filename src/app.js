/* Importing modules */
import './sass/main.sass'
import TableModel from './model/TableModel'
import SelectorModel from './model/SelectorModel'
import TableView from './view/TableView'
import ButtonView from './view/ButtonView'
import SelectorView from './view/SelectorView'
import Controller from './controller/Controller'
/* Bricks */
import buttons from './buttons'

/* Declaring instances */
/* Model */
const table = new TableModel('./data/laureate.json')
const countrySelectorModel = new SelectorModel('./data/country.json')

/* View */
const view  = new TableView('laureates')

const sidebarButtons        = new ButtonView(buttons.sidebarData, 'changeCategory', 'categoryButtons', 'sidebar-buttons')
const headerButtons         = new ButtonView(buttons.tableHeaderData, 'sortTable', 'tableHeaderButtons', 'table-header')

const tableView             = new TableView('laureates')
const yearSelectorView      = new SelectorView('changeYear', 'yearSelector')
const countrySelectorView   = new SelectorView('changeCountry', 'countrySelector');
setTimeout(() => {
    countrySelectorView.renderDropdown(countrySelectorModel.getData())
}, 1500)

let sThisYear = (new Date()).getFullYear() + 1
let aYearData = []
for (let i = 1900; i < sThisYear; i++) {
    aYearData.push({
        'name': i,
        'code': i
    });
}

yearSelectorView.renderDropdown(aYearData)

/* Controller */
const controller = new Controller(table, view, sidebarButtons, countrySelectorView, yearSelectorView, headerButtons)