import TableModel from './model/TableModel'
import View from './view/View'
import Controller from './controller/Controller'
const table = new TableModel('./data/laureate.json')
const view = new View()
const controller = new Controller(table, view)
