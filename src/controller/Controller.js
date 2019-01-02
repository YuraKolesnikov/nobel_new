class Controller {
    constructor(model, view, firstFilter, secondFilter, thirdFilter, sortingButtons, modalWindow) {
        this.model  = model
        this.view   = view
        this.firstFilter    = firstFilter
        this.secondFilter   = secondFilter
        this.thirdFilter    = thirdFilter
        this.sortingButtons = sortingButtons
        this.modalWindow    = modalWindow
        this._oFilter = {
            first: 'all',
            second: 'all',
            third: 'all'
        };
        model.on('dataLoaded', this._loadData.bind(this));
        view.on('sortData', this.sortData.bind(this));
        view.on('renderModal', this.renderModal.bind(this))
        this.firstFilter.on('changeCategory', this.filterByCategory.bind(this))
        this.secondFilter.on('changeCountry', this.filterByCountry.bind(this))
        this.thirdFilter.on('changeYear', this.filterByYear.bind(this))
        this.sortingButtons.on('sortTable', this.sortData.bind(this))
    }
    _loadData() {
        const aData = this.model.filterData(this._oFilter);
        console.log(aData)
        this.view.renderTable(aData);
    }
    sortData(id) {
        this.view.renderTable(this.model.sortData(id));
        console.log(`Sorting data by ${id}`);
    }
    filterByCategory(id) {
        this._oFilter.first = id
        this._loadData()
    }
    filterByCountry(id) {
        this._oFilter.second = id
        this._loadData()
    }
    filterByYear(id) {
        this._oFilter.third = id
        this._loadData()
    }
    renderModal(id) {
        console.log(`Hello from Controller! This row id is ${id}`)
    }
}



export default Controller;