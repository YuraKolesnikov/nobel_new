class Controller {
    constructor(oModel, oView, oFilterSet, oSortingButtons, oModalWindow) {
        this.oModel  = oModel
        this.oView   = oView
        this.oFilterSet = oFilterSet
        this.oSortingButtons = oSortingButtons
        this.oModalWindow    = oModalWindow

        this._oFilter = {
            category: 'all',
            country: 'all',
            year: 'all'
        };

        oModel.on('dataLoaded', this._loadData.bind(this))
        oView.on('sortData', this.sortData.bind(this))
        oView.on('renderModal', this.renderModal.bind(this))
        this.oFilterSet.first.on('changeCategory', this.filterByCategory.bind(this))
        this.oFilterSet.second.on('changeCountry', this.filterByCountry.bind(this))
        this.oFilterSet.third.on('changeYear', this.filterByYear.bind(this))
        this.oSortingButtons.on('sortTable', this.sortData.bind(this))
    }

    _loadData() {
        const aData = this.oModel.filterData(this._oFilter)
        this.oView.renderTable(aData);
    }

    sortData(id) {
        this.oView.renderTable(this.model.sortData(id))
        console.log(`Sorting data by ${id}`)
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
        let oItem = this.oModel._getObjectById(id)
        this.oModalWindow.renderModal(oItem)
    }
}

export default Controller;