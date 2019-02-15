/* Importing polyfills for IE11 and styles */
import './scss/main.scss'
import '@babel/polyfill'
/* Bricks */
import buttons from './mvc/buttons'


/* Importing modules */
/* URL Parser */
import URLParser     from './router/URLParser'
/* Model */
import TableModel    from './mvc/model/TableModel'
import SelectorModel from './mvc/model/SelectorModel'
/* View */
import TableView     from './mvc/view/TableView'
import ButtonView    from './mvc/view/ButtonView'
import SelectorView  from './mvc/view/SelectorView'
import ModalView     from './mvc/view/ModalView'
import AdminView     from './mvc/view/AdminView'
/* Controller */
import Controller    from './mvc/controller/Controller'


/* Declaring instances */
/* Model */
/* Client development */
//const oTableModel = new TableModel('./data/laureate.json')
/* Server development */
const oTableModel = new TableModel('/api/laureates')
const oCountrySelectorModel = new SelectorModel('./data/country.json')

/* View */
/* Rendering buttons */
const oSidebarButtons = new ButtonView(buttons.sidebarData, 'changeCategory', 'categoryButtons', 'sidebar-buttons')
const oHeaderButtons  = new ButtonView(buttons.tableHeaderData, 'sortTable', 'tableHeaderButtons', 'table-header')

const oTableView   = new TableView('laureates')
const oModalWindow = new ModalView('modal_window')

/* Rendering dropdowns */
const oYearSelectorView    = new SelectorView('changeYear', 'yearSelector')
const oCountrySelectorView = new SelectorView('changeCountry', 'countrySelector');
setTimeout(() => oCountrySelectorView.renderDropdown(oCountrySelectorModel.getData()), 0)

const sThisYear = new Date().getFullYear()
const aYearData = 
Array
.from(Array(sThisYear - 1900), (x, idx) => ({name: sThisYear - idx, code: sThisYear - idx}))
.sort((a, b) => a.name - b.name)

oYearSelectorView.renderDropdown(aYearData)

/* Rendering admin controls */
const adminView = new AdminView()
/* URL Parser */
const oURLParser = new URLParser()

/* Controller */
const oFilterSet = {
    first: oSidebarButtons,
    second: oCountrySelectorView,
    third: oYearSelectorView
}


const oMainController = new Controller(oTableModel, oTableView, adminView, oFilterSet, oHeaderButtons, oModalWindow, oURLParser)