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
Model.prototype._prepareData = function(sType) {
    this.aDataForRender = [];
    sType === 'dropdown' ? this._generateId() : 1
    this._oData.forEach(function(item) {
        return item.id !== undefined && item.born !== '0000-00-00' ? 
            this.aDataForRender.push(
                sType === 'table' ? 
                    this._generateObject(item.id) : 
                sType === 'dropdown' ? 
                    this._generateSelect(item.id) : 0) : 0
    }, this)
    /* For debugging */
    sType === 'dropdown' ? console.log('New dropdown: ') : console.log('New table: ')
    return this.aDataForRender;
}

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
    var oObject = this._oData.find(function(element) {
        return element.id == sID
    })
    return oObject;
}
Model.prototype._generateId = function() {
    this._oData = this._oData.map(function(item, index) {
        return {
            id: index,
            name: item.name,
            code: item.code
        }
    })
    return this._oData;
}
Model.prototype._validateValue = function (value) {
    return value === undefined ? value = 'Unknown' : value === '0000-00-00' ? value = '-' : value;
}

Model.prototype._generateObject = function(sID) {
    var oSourceObject = this._getObjectById(sID);
        var oNewObject = {
            id: this._validateValue(oSourceObject.id) || '',
            name: this._validateValue(oSourceObject.firstname) || this._validateValue(oSourceObject.name),
            surname: this._validateValue(oSourceObject.surname) || this._validateValue(oSourceObject.lastname),
            born: this._validateValue(oSourceObject.born),
            died: this._validateValue(oSourceObject.died),
            age: this.getAge(oSourceObject.born, oSourceObject.died),
            country: this._validateValue(oSourceObject.bornCountry),
            filterAnchor: this._validateValue(oSourceObject.bornCountryCode),
            description1: 'Born in ' + this._validateValue(oSourceObject.bornCity) + ', ' + this._validateValue(oSourceObject.bornCountry),
            description2: 'Died in ' + this._validateValue(oSourceObject.diedCity) + ', ' + this._validateValue(oSourceObject.diedCountry),
            infoTitle: 'Prizes: ',
            info: oSourceObject.prizes.map(function(infoPiece) {
                return {
                    year: infoPiece.year,
                    subject: infoPiece.category,
                    caption: infoPiece.motivation,
                    additionalInfo: infoPiece.affiliations.map(function(location) {
                        return {
                            name: location.name,
                            city: location.city,
                            country: location.country
                        }
                    })
                }
            })
        };
    return oNewObject;
}

Model.prototype._generateSelect = function(sID) {
    var oObject = this._getObjectById(sID);
    return oObject;
}
/* Public methods */
Model.prototype.filterData = function(oURLParser, sType) {
    var sCategory       = oURLParser.category;
    var sCountryCode    = oURLParser.country;
    var sYear           = oURLParser.year;
    var aInitialData    = this._prepareData(sType);
    var aFilteredData   = aInitialData
        .filter(function(oObject) {
            sCategory === 'all' ? sCategory = '' : sCategory
            sYear === 'all' ? sYear = '' : sYear
            var oInfo = oObject.info.filter(function (item) {
                return (sCategory && item.subject !== sCategory ? false : true) && (sYear && item.year != sYear ? false : true)
            })
            return oInfo.length > 0;
        })
        .filter(function (oObject) {
            sCountryCode === 'all' ? sCountryCode = '' : sCountryCode;
            return sCountryCode && oObject.filterAnchor != sCountryCode ? false : true
        });
    console.log(oURLParser)
    return aFilteredData;
}

Model.prototype.sortData = function(oURLParser, key, sType) {
    var oData = this.filterData(oURLParser, sType)
    this.ascending = !this.ascending
    if (this.ascending === true) {
        oData.sort(function(a, b) {
            return a[key] > b[key] ? 1 : -1
        })
    } else {
        oData.sort(function(a, b) {
            return a[key] < b[key] ? 1 : -1
        })
    }
    return oData;
}

Model.prototype.getData = function(oURLParser, sType) {
    return this.filterData(oURLParser, sType);
}

module.exports = Model;