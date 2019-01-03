class Controller {
    constructor(model, view, filterSet, sortingButtons, modalWindow) {
        this.model  = model
        this.view   = view
        this.filterSet = filterSet
        this.sortingButtons = sortingButtons
        this.modalWindow    = modalWindow
        this._oFilter = {
            category: 'all',
            country: 'all',
            year: 'all'
        };
        model.on('dataLoaded', this._loadData.bind(this))
        model.on('dataLoaded', this._loadControls.bind(this))
        view.on('sortData', this.sortData.bind(this))
        view.on('renderModal', this.renderModal.bind(this))
        this.filterSet.first.on('changeCategory', this.filterByCategory.bind(this))
        this.filterSet.second.on('changeCountry', this.filterByCountry.bind(this))
        this.filterSet.third.on('changeYear', this.filterByYear.bind(this))
        this.sortingButtons.on('sortTable', this.sortData.bind(this))
    }
    _loadData() {
        const aData = this.model.filterData(this._oFilter);
        this.view.renderTable(aData);
    }
    _loadControls() {
        
    }
    sortData(id) {
        this.view.renderTable(this.model.sortData(id));
        console.log(`Sorting data by ${id}`);
    }
    filterByCategory(id) {
        this._oFilter.category = id
        this._loadData()
    }
    filterByCountry(id) {
        this._oFilter.country = id
        this._loadData()
    }
    filterByYear(id) {
        this._oFilter.year = id
        this._loadData()
    }
    renderModal(id) {
        let oItem = this.model._getObjectById(id)
        this.modalWindow.renderModal(oItem)
    }
}

export default Controller;