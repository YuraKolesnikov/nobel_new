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

/* Declaring instances */
/* Model */
const tableModel = new TableModel('./data/laureate.json')
const countrySelectorModel = new SelectorModel('./data/country.json')

/* View */
const view  = new TableView('laureates')

const sidebarButtons        = new ButtonView(buttons.sidebarData, 'changeCategory', 'categoryButtons', 'sidebar-buttons')
const headerButtons         = new ButtonView(buttons.tableHeaderData, 'sortTable', 'tableHeaderButtons', 'table-header')

const tableView             = new TableView('laureates')
const yearSelectorView      = new SelectorView('changeYear', 'yearSelector')
const countrySelectorView   = new SelectorView('changeCountry', 'countrySelector');
const modalWindow           = new ModalView('modal_window')
modalWindow.renderModal({
    name: 'Vasya',
    surname: 'Pupkin',
    born: '1993-15-08',
    died: '2150-01-01',
    description1: 'The best guitarist player',
    description2: 'Also the best web developer',
    infoTitle: 'Prizes',
    info: [
        { name: 'Item one' },
        { name: 'Item two' }
    ]
})
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
const controller = new Controller(tableModel, tableView, sidebarButtons, countrySelectorView, yearSelectorView, headerButtons)