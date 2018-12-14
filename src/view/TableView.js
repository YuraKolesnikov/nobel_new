var View = require('./View')
function TableView(oHeader, oTable) {
    this._oHeader = document.getElementById(oHeader)
    this._oTable = document.getElementById(oTable)
}

TableView.prototype = Object.create(View.prototype);
TableView.prototype._super = View;

TableView.prototype.renderTable = function(oData) {
    this._clearContainer(this._oTable)
    this._renderHeader();
    this._renderContent(oData);
}

TableView.prototype._renderHeader = function() {
    var oID     = this._createElement('td', { id: 'id',         'data-id': '0' }, 'ID'),
    oName       = this._createElement('td', { id: 'name',       'data-id': '1' }, 'Name'),
    oSurname    = this._createElement('td', { id: 'surname',    'data-id': '2' }, 'Surname'),
    oBorn       = this._createElement('td', { id: 'born',       'data-id': '3' }, 'Born'),
    oDied       = this._createElement('td', { id: 'died',       'data-id': '4' }, 'Died'),
    oAge        = this._createElement('td', { id: 'age',        'data-id': '5' }, 'Age'),
    oCountry    = this._createElement('td', { id: 'country',    'data-id': '6' }, 'Country'),
    oInfo       = this._createElement('td', { id: 'info',       'data-id': '7' }, 'Info');
    var oRow    = this._createElement('td', {}, oID, oName, oSurname, oBorn, oDied, oAge, oCountry, oInfo)
    Array.from(oRow.children).forEach(function(headerCell) {
        headerCell.addEventListener('click', function() {
            /* сортировка по этому элементу */
            console.log(headerCell.id)
        })
    })
    this._oHeader.appendChild(oRow)
    return this._oHeader;
}

TableView.prototype._renderContent = function(oData) {
    /* For testing purposes */
    console.log(this._oTable);
    oData.forEach(function(item, index) {
        var oID = this._createElement('td', {}, item.id),
        oName       = this._createElement('td', {}, item.name),
        oSurname    = this._createElement('td', {}, item.surname),
        oBorn       = this._createElement('td', {}, item.born),
        oDied       = this._createElement('td', {}, item.died),
        oAge        = this._createElement('td', {}, item.age.toString()),
        oCountry    = this._createElement('td', {}, item.country),
        oInfo       = this._createElement('td', {}, item.info[0].year + ', ' + item.info[0].subject);
        var oRow = this._createElement('tr', { id: index, 'data-id': index }, oID, oName, oSurname, oBorn, oDied, oAge, oCountry, oInfo);
        this._oTable.appendChild(oRow);
    }, this)
    return this._oTable;
}

module.exports = TableView;