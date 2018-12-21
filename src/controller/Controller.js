function Controller(model, view) {
    this.model = model;
    
    this.view = view;
    this._oFilter = {
        first: 'all',
        second: 'all',
        third: 'all'
    }
    model.on('dataLoaded', this._loadData.bind(this))
    view.on('sortData', this.sortData.bind(this))
    view.on('filterData', this.filterData.bind(this))
    //console.log(this.model.filterData(this._oFilter))
}
Controller.prototype._loadData = function(aData) {
    //console.log('Loading data...')
    //console.log(this.model.filterData(this._oFilter))
}
Controller.prototype.sortData = function(id) {
    //console.log(this.model.sortData(id))
    //console.log(`Sorting data by ${id}`)
}

Controller.prototype.filterData = function(id) {
    this._oFilter.first = id;
    //console.log(this.model.filterData((this._oFilter)))
    //console.log(`Filtering ${id} from data`)
}

export default Controller;