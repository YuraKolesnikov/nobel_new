import View from './View'
class TableView extends View {
    constructor(tableName) {
        super()
        this.oTable = document.getElementById(`${tableName}Table`)
        
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
            let id       = this._createElement('td', {}, oItem.id)
            let name     = this._createElement('td', {}, oItem.name)
            let surname  = this._createElement('td', {}, oItem.surname)
            let born     = this._createElement('td', {}, oItem.born)
            let died     = this._createElement('td', {}, oItem.died)
            let age      = this._createElement('td', {}, oItem.age.toString())
            let country  = this._createElement('td', {}, oItem.country)
            let info     = this._createElement('td', {}, this._reduceObjectToArray(oItem.info).toString())
            let oBodyRow = this._createElement('tr', { id: oItem.id }, id, name, surname, born, died, age, country, info)
            oBodyRow.addEventListener('click', this.handleRowClick.bind(this))
            oTableBody.appendChild(oBodyRow)
        }, this);
        this.oTable.appendChild(oTableBody)
        return this.oTable;
    }

    handleRowClick() {
        console.log('KEK')
    }

}

export default TableView;