class Controller {
    constructor(model, view, secondFilter) {
        this.model = model;
        this.view = view;
        this.secondFilter = secondFilter;
        this._oFilter = {
            first: 'all',
            second: 'all',
            third: 'all'
        };
        model.on('dataLoaded', this._loadData.bind(this));
        view.on('sortData', this.sortData.bind(this));
        view.on('filterData', this.filterData.bind(this));
        //this.secondFilter.on('changeCountry', this.filterData.bind(this))
    }
    _loadData() {
        const aData = this.model.filterData(this._oFilter);
        this.view.renderTable(aData);
    }
    sortData(id) {
        this.view.renderTable(this.model.sortData(id));
        console.log(`Sorting data by ${id}`);
    }
    filterData(id) {
        this._oFilter.second = id;
        this._loadData();
    }
}



export default Controller;