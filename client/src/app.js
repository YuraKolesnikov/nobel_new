/* Importing polyfills for IE11 and styles */
import './scss/main.scss'
import './common'
import '@babel/polyfill'
/* Bricks */
import buttons from './mvc/buttons'
import forms from './mvc/forms'

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
const oTableModel = new TableModel('./data/laureate.json')
/* Server development */
//const oTableModel = new TableModel('/api/laureates')
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

const createLaureate = () => console.log('Creating laureate! Yahoo!')
const createButton = adminView.renderButton('Create', undefined, 'createLaureate', 'btn btn-primary')
document.getElementById('sidebar').appendChild(createButton)
createButton.addEventListener('click', () => {
    adminView.renderPostForm('modal_form', forms.postForm)
})

const editButton = adminView.renderButton('Edit', undefined, 'test', 'btn btn-primary')
document.getElementById('sidebar').appendChild(editButton)
editButton.addEventListener('click', () => {
    adminView.renderPatchForm('modal_form', forms.editForm)
})

const deleteButton = adminView.renderButton('Delete', undefined, 'deleteLaureate', 'btn btn-primary')
document.getElementById('sidebar').appendChild(deleteButton)
deleteButton.addEventListener('click', () => {
    adminView.renderDeleteForm('modal_form', forms.deleteForm)
})
/* URL Parser */
const oURLParser = new URLParser()

/* Controller */
const oFilterSet = {
    first: oSidebarButtons,
    second: oCountrySelectorView,
    third: oYearSelectorView
}

/* oTableModel.updateLaureate('1001', {
    'surname': 'Abbey Road'
}) */
const oMainController = new Controller(oTableModel, oTableView, adminView, oFilterSet, oHeaderButtons, oModalWindow, oURLParser)

addListeners()