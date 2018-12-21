import TableModel from './model/TableModel'
import TableView from './view/TableView'
import View from './view/View'
import Controller from './controller/Controller'
const table = new TableModel('./data/laureate.json')
const view = new View()
const controller = new Controller(table, view)
const tableView = new TableView('laureates')
setTimeout(() => console.log(table._prepareData()), 1500)
tableView.renderTable([
    {
        id: '1',
        name: 'Wilhelm Conrad',
        surname: 'Rontgen',
        born: '1845-03-27',
        died: '1923-02-10',
        age: 80,
        country: 'Germany',
        info: [
            {
                year: '1901',
                subject: 'physics'
            }
        ]
    }
])
