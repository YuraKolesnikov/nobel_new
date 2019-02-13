import View from './View'
class TableView extends View {
    constructor(sTableName) {
        super()
        this.oTable = document.getElementById(`${sTableName}Table`)
        
    }
    
    _reduceObjectToArray(aArray) {
        let newArray = [];
        aArray.forEach(obj => {
            newArray.push(` ${obj.subject} ${obj.year}`)
        })
        return newArray;
    }
    
    renderTable(aData) {
        this._clearContainer.call(this.oTable)
        let oTableBody = this._createElement('tbody', {})
        aData.forEach(oItem => {
            let oId      = this._createElement('td', { className: 'table-body__cell table-body__cell-sm' }, oItem.id.toString())
            if (oItem.id == '467') {
                console.log(oId)
            }
            let oName    = this._createElement('td', { className: 'table-body__cell' }, oItem.name)
            if (oItem.id == '467') {
                console.log(oName)
            }
            let oSurname = this._createElement('td', { className: 'table-body__cell' }, oItem.surname)
            if (oItem.id == '467') {
                console.log(oSurname)
            }
            let oBorn    = this._createElement('td', { className: 'table-body__cell' }, oItem.born)
            if (oItem.id == '467') {
                console.log(oBorn)
            }
            let oDied    = this._createElement('td', { className: 'table-body__cell' }, oItem.died)
            if (oItem.id == '467') {
                console.log(oDied)
            }
            let oAge     = this._createElement('td', { className: 'table-body__cell table-body__cell-sm' }, oItem.age.toString())
            if (oItem.id == '467') {
                console.log(oAge)
            }
            console.log(oItem.country)
            let oCountry = this._createElement('td', { className: 'table-body__cell' }, oItem.country)
            if (oItem.id == '467') {
                console.log(oCountry)
            }
            let oInfo    = this._createElement('td', { className: 'table-body__cell' }, this._reduceObjectToArray(oItem.info).toString())
            if (oItem.id == '467') {
                console.log(oInfo)
            }
            let oBodyRow = this._createElement('tr', { id: oItem.id }, oId, oName, oSurname, oBorn, oDied, oAge, oCountry, oInfo)
            console.log(oBodyRow)
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