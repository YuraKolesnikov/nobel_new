class Controller {
  constructor(
    oModel, 
    oView, 
    oAdminView,
    oFilterSet, 
    oSortingButtons, 
    oModalWindow, 
    oURLParser
    ) {
      this.oModel  = oModel
      this.oView   = oView
      this.oAdminView = oAdminView
      this.oFilterSet = oFilterSet
      this.oSortingButtons = oSortingButtons
      this.oModalWindow    = oModalWindow
      this.oURLParser = oURLParser
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
    oAdminView.on('laureateCreated', this.createLaureate.bind(this))
    oAdminView.on('laureateUpdated', this.editLaureate.bind(this))
    oAdminView.on('laureateDeleted', this.deleteLaureate.bind(this))
  }
  
  _loadData() {
    const aData = this.oModel.filterData(this._oFilter)
    this.oView.renderTable(aData);
    this.oURLParser.getUrl(this._oFilter)
    this.sortData()
  }
  
  sortData(id) {
    this.oView.renderTable(this.oModel.sortData(id))
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
    const oItem = this.oModel._getObjectById(id)
    this.oModalWindow.renderModal(oItem)
  }

  createLaureate(data) {
    console.log('Creating laureate!')
    console.log(data)
    this.oModel.createLaureate(data)
  }

  editLaureate(data) {
    console.log('Editing laureate!')
    console.log(data)
    this.oModel.updateLaureate(data)
  }

  deleteLaureate(id) {
    console.log('Deleting laureate!')
    console.log(id)
    this.oModel.deleteLaureate(id)
  }
}

export default Controller;