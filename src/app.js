/* Importing modules */
import './sass/main.sass'
import TableModel from './model/TableModel'
import SelectorModel from './model/SelectorModel'
import TableView from './view/TableView'
import ButtonView from './view/ButtonView'
import SelectorView from './view/SelectorView'
import ModalView from './view/ModalView'
import Controller from './controller/Controller'

/* Bricks */
import buttons from './buttons'
import Model from './model/Model';

/* Declaring instances */
/* Model */
const tableModel = new TableModel('./data/laureate.json')
const countrySelectorModel = new SelectorModel('./data/country.json')

/* View */
const view  = new TableView('laureates')
/* Rendering buttons */
const sidebarButtons = new ButtonView(buttons.sidebarData, 'changeCategory', 'categoryButtons', 'sidebar-buttons')
const headerButtons  = new ButtonView(buttons.tableHeaderData, 'sortTable', 'tableHeaderButtons', 'table-header')

const tableView             = new TableView('laureates')

const modalWindow           = new ModalView('modal_window')

/* Rendering dropdowns */
const yearSelectorView      = new SelectorView('changeYear', 'yearSelector')
const countrySelectorView   = new SelectorView('changeCountry', 'countrySelector');
tableModel.on('dataLoaded', () => countrySelectorView.renderDropdown(countrySelectorModel.getData()))

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
const filterSet = {
    first: sidebarButtons,
    second: countrySelectorView,
    third: yearSelectorView
}
const controller = new Controller(tableModel, tableView, filterSet, headerButtons, modalWindow)