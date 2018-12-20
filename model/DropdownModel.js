var Model = require('./Model')
function DropdownModel(_sResourceUrl, _sEventName){
    this._sEventName = _sEventName;
}
DropdownModel.prototype = Object.create(Model.prototype);
DropdownModel.prototype._super = Model;

DropdownModel.prototype._generateId = function() {
    this._oData = this._oData
        .map(function(item, index) {
            return {
                id: index,
                name: item.name,
                code: item.code
            }
        })
        .sort(function(a, b) { return a.name > b.name ? 1 : -1})
    return this._oData;
}
DropdownModel.prototype.getData = function() {
    return this._generateId();
}
module.exports = DropdownModel;