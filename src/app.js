import TableModel from './model/TableModel'
import TableView from './view/TableView'
import View from './view/View'
import Controller from './controller/Controller'
import SelectorModel from './model/SelectorModel'
import SelectorView from './view/SelectorView'
import './sass/main.sass'
const table = new TableModel('./data/laureate.json')
const view  = new TableView('laureates')
import ButtonView from './view/ButtonView'
console.log(ButtonView)
const tableHeaderData = [
    { id: 'id', title: 'ID', small: true },
    { id: 'name', title: 'Name', small: false },
    { id: 'surname', title: 'Surname', small: false },
    { id: 'born', title: 'Born', small: false },
    { id: 'died', title: 'Died', small: false },
    { id: 'age', title: 'Age', small: true },
    { id: 'country', title: 'Country', small: false },
    { id: 'prizes', title: 'Prizes', small: false }
]
const sidebarData = [
    { id: 'all', title: 'All' },
    { id: 'chemistry', title: 'Chemistry' },
    { id: 'physics', title: 'Physics' },
    { id: 'medicine', title: 'Medicine' },
    { id: 'peace', title: 'Peace' },
    { id: 'literature', title: 'Literature' }
]
const sidebarButtons = new ButtonView(sidebarData, 'filter', 'categoryButtons', 'sidebar-buttons')
const headerButtons = new ButtonView(tableHeaderData, 'sortTable', 'tableHeaderButtons', 'table-header')
const tableView     = new TableView('laureates')
const countrySelectorModel = new SelectorModel('./data/country.json')
const countrySelectorView = new SelectorView('countrySelector');
setTimeout(() => {
    countrySelectorView.renderDropdown(countrySelectorModel.getData())
}, 1500)
const controller    = new Controller(table, view, countrySelectorView)