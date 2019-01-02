import EventEmitter from '../helpers'
class Model extends EventEmitter {
    constructor(_sResourceUrl) {
        super();
        this._sResourceUrl = _sResourceUrl;
        this._oData = [];
        this._loadData(_sResourceUrl)
    }
    _loadData(_sResourceUrl) {
        /* TODO: поменять на fetch */
        const request = new XMLHttpRequest();
        request.open('GET', this._sResourceUrl, true);
        request.onload = function () {
            if (request.status === 200) {
                const type = request.getResponseHeader('Content-Type');
                if (type.indexOf('text') !== 1) {
                    this._oData = JSON.parse(request.responseText);
                }
                this.emit('dataLoaded')
            }
        }.bind(this);
        request.send();
    }
    _validateValue(value) {
        return value === undefined ? value = 'Unknown' : value === '0000-00-00' ? value = '-' : value;
    }
    
    getData() {
        return this._oData;
    }
}

export default Model;