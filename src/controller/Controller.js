class Controller {
    constructor(model, view, categoryFilter, countryFilter, yearFilter, sortingButtons, modalWindow) {
        this.model  = model
        this.view   = view
        this.categoryFilter = categoryFilter
        this.countryFilter  = countryFilter
        this.yearFilter     = yearFilter
        this.sortingButtons = sortingButtons
        this.modalWindow    = modalWindow
        this._oFilter = {
            category: 'all',
            country: 'all',
            year: 'all'
        };
        model.on('dataLoaded', this._loadData.bind(this));
        view.on('sortData', this.sortData.bind(this));
        view.on('renderModal', this.renderModal.bind(this))
        this.categoryFilter.on('changeCategory', this.filterByCategory.bind(this))
        this.countryFilter.on('changeCountry', this.filterByCountry.bind(this))
        this.yearFilter.on('changeYear', this.filterByYear.bind(this))
        this.sortingButtons.on('sortTable', this.sortData.bind(this))
    }
    _loadData() {
        const aData = this.model.filterData(this._oFilter);
        this.view.renderTable(aData);
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
        console.log(`Hello from Controller! This row id is ${id}`)
    }
}



export default Controller;