import Model from './Model'
class SelectorModel extends Model {
    constructor(_sResourceUrl) {
        super(_sResourceUrl)
        this._sResourceUrl = _sResourceUrl
    }
    _generateId() {
        this._oData = this._oData
            .map((item, index) => ({
                    id: index,
                    name: item.name,
                    code: item.code
                }))
            .sort((a, b)  => a.name > b.name ? 1 : -1);
        return this._oData;
    }
    getData() {
        return this._generateId()
    }
}

export default SelectorModel