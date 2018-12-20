function Controller(view) {
    this.view = view;

    view.on('sortData', this.sortData.bind(this))
    view.on('filterData', this.filterData.bind(this))
}

Controller.prototype.sortData = function(id) {
    console.log(`Sorting data by ${id}`)
}

Controller.prototype.filterData = function(id) {
    console.log(`Filtering ${id} from data`)
}

module.exports = Controller;