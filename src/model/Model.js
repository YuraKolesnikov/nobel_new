import EventEmitter from '../helpers'
class Model extends EventEmitter {
    constructor(_sResourceUrl) {
        super();
        this._sResourceUrl = _sResourceUrl;
        this._oData = [];
        this._loadData(_sResourceUrl)
    }
    
    _loadData(_sResourceUrl) {
        fetch(this._sResourceUrl)
        .then(res => res.json())
        .then(data => {
            this._oData = data
            this.emit('dataLoaded')
        })
    }

    _validateValue(value) {
        return value === undefined ? value = 'Unknown' : value === '0000-00-00' ? value = '-' : value;
    }
    
    getData() {
        return this._oData;
    }
}

export default Model;