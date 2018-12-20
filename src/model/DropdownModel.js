import Model from './Model'
class DropdownModel extends Model {
    constructor(_sResourceUrl, _sEventName) {
        super()
        this._sResourceUrl = _sResourceUrl;
        this._sEventName = _sEventName;
    }
    _generateId() {
        this._oData = this._oData
            .map(function (item, index) {
                return {
                    id: index,
                    name: item.name,
                    code: item.code
                };
            })
            .sort(function (a, b) { return a.name > b.name ? 1 : -1; });
        return this._oData;
    }
    getData() {
        return this._generateId();
    }
}

export default DropdownModel;