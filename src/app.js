/* Importing polyfills for IE11 and styles */
import './sass/main.sass'
import '@babel/polyfill'

/* Bricks */
import buttons from './buttons'


/* Importing modules */
import URLParser        from './router/URLParser'
import TableModel       from './model/TableModel'
import SelectorModel    from './model/SelectorModel'

import TableView        from './view/TableView'
import ButtonView       from './view/ButtonView'
import SelectorView     from './view/SelectorView'
import ModalView        from './view/ModalView'

import Controller       from './controller/Controller'



/* Declaring instances */
/* Model */
const oTableModel = new TableModel('./data/laureate.json')
const oCountrySelectorModel = new SelectorModel('./data/country.json')

/* View */
const view  = new TableView('laureates')
/* Rendering buttons */
const oSidebarButtons = new ButtonView(buttons.sidebarData, 'changeCategory', 'categoryButtons', 'sidebar-buttons')
const oHeaderButtons  = new ButtonView(buttons.tableHeaderData, 'sortTable', 'tableHeaderButtons', 'table-header')

const oTableView    = new TableView('laureates')
const oModalWindow  = new ModalView('modal_window')

/* Rendering dropdowns */
const oYearSelectorView      = new SelectorView('changeYear', 'yearSelector')
const oCountrySelectorView   = new SelectorView('changeCountry', 'countrySelector');
setTimeout(() => oCountrySelectorView.renderDropdown(oCountrySelectorModel.getData()), 1000)

let sThisYear = (new Date()).getFullYear() + 1
let aYearData = []
for (let i = 1900; i < sThisYear; i++) {
    aYearData.push({
        'name': i,
        'code': i
    });
}
oYearSelectorView.renderDropdown(aYearData)

/* URL Parser */
const oURLParser = new URLParser()
oURLParser.getUrl({
    category: 'all',
    country: 'all',
    year: 'all'
})

/* Controller */
const oFilterSet = {
    first: oSidebarButtons,
    second: oCountrySelectorView,
    third: oYearSelectorView
}

const oController = new Controller(oTableModel, oTableView, oFilterSet, oHeaderButtons, oModalWindow, oURLParser)

