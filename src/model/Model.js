import EventEmitter from '../helpers'
class Model extends EventEmitter {
    constructor(_sResourceUrl, _sEventName) {
        super();
        this._constructor(_sResourceUrl);
        this._sEventName = _sEventName;
        this._oData = [];
        this._loadData(_sResourceUrl)
    }
    _loadData(_sResourceUrl) {
        this._sResourceUrl = _sResourceUrl;
        var request = new XMLHttpRequest();
        request.open('GET', this._sResourceUrl, true);
        request.onload = function () {
            if (request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf('text') !== 1) {
                    this._oData = JSON.parse(request.responseText);
                }
            }
        }.bind(this);
        request.send();
    }
    _validateValue(value) {
        return value === undefined ? value = 'Unknown' : value === '0000-00-00' ? value = '-' : value;
    }
    _getObjectById(sID) {
        return this._oData.find(function (element) {
            return element.id == sID;
        });
    }
    getData() {
        return this._oData;
    }
}

export default Model;