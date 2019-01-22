/* Importing polyfills for IE11 and styles */
import './sass/main.sass'
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
/* Controller */
import Controller    from './mvc/controller/Controller'



/* Declaring instances */
/* Model */
const oTableModel = new TableModel('./data/laureate.json')
const oCountrySelectorModel = new SelectorModel('./data/country.json')

/* View */
const view  = new TableView('laureates')
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

/* URL Parser */
const oURLParser = new URLParser()

/* Controller */
const oFilterSet = {
    first: oSidebarButtons,
    second: oCountrySelectorView,
    third: oYearSelectorView
}

const oMainController = new Controller(oTableModel, oTableView, oFilterSet, oHeaderButtons, oModalWindow, oURLParser)