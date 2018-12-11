function Model(_sResourceUrl, _sEventName) {
    this._sResourceUrl = _sResourceUrl;
    this._sEventName = _sEventName;
    this._oData = [];
    this._loadData(_sResourceUrl)
}

/* Private methods */
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
            this._fireDataLoadedEvent();
        }
    }.bind(this);
    request.send()
}

Model.prototype._fireDataLoadedEvent = function() {
    var oEvent = new Event(this._sEventName);
    console.log(`Event '${oEvent.type}' fired!`);
    document.dispatchEvent(oEvent);
}
Model.prototype._prepareData = function() {}

Model.prototype.getAge = function(sBorn, sDied) {
    if (sDied !== '0000-00-00') {
        nAge = parseInt(sDied, 10) - parseInt(sBorn, 10);
    } else {
        var d = new Date().toISOString().substr(0, 10);
        nAge = parseInt(d, 10) - parseInt(sBorn, 10);
    }
    return nAge;
}

Model.prototype._getObjectById = function(sID) {
    var oLaureate = this._oData.find(function(element) {
        return element.id == sID
    })
    return oLaureate;
}

Model.prototype.validateValue = function (value) {
    value === undefined ? value = 'Unknown' : value === '0000-00-00' ? value = '-' : value;
    return value;
}

Model.prototype._generateObject = function(sID) {
    var oSourceObject = this._getObjectById(sID);
    var oNewObject = {};
    oNewObject.firstname    = this.validateValue(oSourceObject.firstname);
    oNewObject.surname      = this.validateValue(oSourceObject.surname);
    oNewObject.born         = this.validateValue(oSourceObject.born);
    oNewObject.died         = this.validateValue(oSourceObject.died);
    oNewObject.age          = this.getAge(oSourceObject.born, oSourceObject.died);
    oNewObject.country      = this.validateValue(oSourceObject.bornCountry);
    oNewObject.description1 = 'Born in ' + this.validateValue(oSourceObject.bornCity) + ', ' + this.validateValue(oSourceObject.bornCountry);
    oNewObject.description2 = 'Died in ' + this.validateValue(oSourceObject.diedCity) + ', ' + this.validateValue(oSourceObject.diedCountry);
    oNewObject.infoTitle    = 'Prizes: ';
    oNewObject.info         = oSourceObject.prizes;
    
    /*  TODO:
        Расписать создание массива info */
    return oNewObject;
}
/* Public methods */
Model.prototype.filterData = function(oURLParser) {
    var sCategory       = oURLParser.category;
    var sCountryCode    = oURLParser.country;
    var sYear           = oURLParser.year;

    var aFilteredData = this._oData
        .filter(function (oLaureate) {
            sCategory === 'all' ? sCategory = '' : sCategory
            sYear === 'all' ? sYear = '' : sYear
            var oLaureatePrizes = oLaureate.prizes.filter(function (prize) {
                return (sCategory && prize.category !== sCategory ? false : true) && (sYear && prize.year != sYear ? false : true)
            })
            return oLaureatePrizes.length > 0;
        })
        .filter(function (oLaureate) {
            sCountryCode === 'all' ? sCountryCode = '' : sCountryCode;
            return sCountryCode && oLaureate.bornCountryCode != sCountryCode ? false : true
        });
    return aFilteredData;
}

Model.prototype.getData = function() {
    return this._prepareData();
}

module.exports = Model;