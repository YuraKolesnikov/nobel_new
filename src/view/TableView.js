import View from './View'
class TableView extends View {
    constructor(sTableName) {
        super()
        this.oTable = document.getElementById(`${sTableName}Table`)
        
    }
    _reduceObjectToArray(aArray) {
        let newArray = [];
        aArray.forEach(obj => {
            newArray.push(obj.subject, obj.year)
        })
        return newArray;
    }
    renderTable(aData) {
        this._clearContainer.call(this.oTable)
        let oTableBody = this._createElement('tbody', {})
        aData.forEach(oItem => {
            /* TODO: Здесь будут ячейки с данными */
            let id       = this._createElement('td', { className: 'table-body__cell table-body__cell-sm' }, oItem.id)
            let name     = this._createElement('td', { className: 'table-body__cell' }, oItem.name)
            let surname  = this._createElement('td', { className: 'table-body__cell' }, oItem.surname)
            let born     = this._createElement('td', { className: 'table-body__cell' }, oItem.born)
            let died     = this._createElement('td', { className: 'table-body__cell' }, oItem.died)
            let age      = this._createElement('td', { className: 'table-body__cell table-body__cell-sm' }, oItem.age.toString())
            let country  = this._createElement('td', { className: 'table-body__cell' }, oItem.country)
            let info     = this._createElement('td', { className: 'table-body__cell' }, this._reduceObjectToArray(oItem.info).toString())
            let oBodyRow = this._createElement('tr', { id: oItem.id }, id, name, surname, born, died, age, country, info)
            oBodyRow.addEventListener('click', this.handleRowClick.bind(this))
            oTableBody.appendChild(oBodyRow)
        }, this);
        this.oTable.appendChild(oTableBody)
        return this.oTable;
    }

    handleRowClick({ target }) {
        const sRowId = target.parentNode.id
        console.log(`${sRowId}`)
        //this.emit('renderModal', target.id)
    }

}

export default TableView;