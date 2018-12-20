function Model(_sResourceUrl, _sEventName) {
    this._constructor(_sResourceUrl);
    this._sEventName    = _sEventName;
    this._oData         = [];
}

Model.prototype._constructor = function(_sResourceUrl) {
    this._loadData(_sResourceUrl);
}
Model.prototype._loadData = function(_sResourceUrl) {
    this._sResourceUrl  = _sResourceUrl;
    var request = new XMLHttpRequest();
    request.open('GET', this._sResourceUrl, true);
    request.onload = function() {
        if (request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf('text') !== 1) {
                this._oData = JSON.parse(request.responseText);
            }

            //this._fireDataLoadedEvent();
        }
    }.bind(this);
    request.send()
}

//Model.prototype._fireDataLoadedEvent = function() {
//    var oEvent = new Event(this._sEventName);
//    console.log('Event ' + oEvent.type + ' fired!');
//    document.dispatchEvent(oEvent);
//}

Model.prototype._validateValue = function (value) {
    return value === undefined ? value = 'Unknown' : value === '0000-00-00' ? value = '-' : value;
}

Model.prototype._getObjectById = function(sID) {
    return this._oData.find(function(element) {
        return element.id == sID
    })
}

Model.prototype.getData = function() {
    return this._oData;
}
module.exports = Model;