import EventEmitter from '../helpers'
import fetch from 'isomorphic-fetch'

class Model extends EventEmitter {
  constructor(_sResourceUrl) {
    super();
    this._sResourceUrl = _sResourceUrl
    this._oData = [];
    this._loadData()
  }

  async _loadData() {
    const res = await fetch(this._sResourceUrl);
    const data = await res.json();
    this._oData = data;
    this.emit('dataLoaded');
  }

  _validateValue(value) {
    const maybeDate = value === '0000-00-00' ? value = '-' : value
    return value === undefined || value === null ? value = 'Unknown' : maybeDate
  }
    
  getData() {
    return this._oData
  }
}

export default Model