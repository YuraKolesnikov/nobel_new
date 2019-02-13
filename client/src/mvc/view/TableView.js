import View from './View'
class TableView extends View {
    constructor(sTableName) {
        super()
        this.oTable = document.getElementById(`${sTableName}Table`)
        
    }
    
    _reduceObjectToArray(aArray) {
        let newArray = [];
        aArray.forEach(obj => {
            newArray.push(` ${obj.category} ${obj.year}`)
        })
        return newArray;
    }
    
    renderTable(aData) {
        this._clearContainer.call(this.oTable)
        let oTableBody = this._createElement('tbody', {})
        aData.forEach(oItem => {
            let oId      = this._createElement('td', { className: 'table-body__cell table-body__cell-sm' }, oItem.id.toString())
            let oName    = this._createElement('td', { className: 'table-body__cell' }, oItem.firstname)
            let oSurname = this._createElement('td', { className: 'table-body__cell' }, oItem.surname)
            let oBorn    = this._createElement('td', { className: 'table-body__cell' }, oItem.born)
            let oDied    = this._createElement('td', { className: 'table-body__cell' }, oItem.died)
            let oAge     = this._createElement('td', { className: 'table-body__cell table-body__cell-sm' }, oItem.age.toString())
            let oCountry = this._createElement('td', { className: 'table-body__cell' }, oItem.bornCountry)
            let oInfo    = this._createElement('td', { className: 'table-body__cell' },this._reduceObjectToArray(oItem.prizes).toString())
            let oBodyRow = this._createElement('tr', { id: oItem.id }, oId, oName, oSurname, oBorn, oDied, oAge, oCountry, oInfo)
            oBodyRow.addEventListener('click', this.handleRowClick.bind(this))
            oTableBody.appendChild(oBodyRow)
        }, this)
        this.oTable.appendChild(oTableBody)
        return this.oTable
    }

    handleRowClick({ target }) {
        const sRowId = target.parentNode.id
        this.emit('renderModal', sRowId)
    }
}

export default TableView