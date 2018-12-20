var Model = require('./Model')
function TableModel(_sResourceUrl, _sEventName){
    this._sEventName = _sEventName;
    this._constructor(_sResourceUrl);
    this._aFilteredData = [];
}

TableModel.prototype._constructor = function(_sResourceUrl) {
    this._super.call(_sResourceUrl)
}
TableModel.prototype = Object.create(Model.prototype);
TableModel.prototype._super = Model;

TableModel.prototype._validateValue = function (sValue) {
    return sValue === undefined ? sValue = 'Unknown' : sValue === '0000-00-00' ? sValue = '-' : sValue;
}

TableModel.prototype._getAge = function(sBorn, sDied) {
    if (sDied !== '0000-00-00') {
        nAge = parseInt(sDied, 10) - parseInt(sBorn, 10);
    } else {
        var d = new Date().toISOString().substr(0, 10);
        nAge = parseInt(d, 10) - parseInt(sBorn, 10);
    }
    return nAge;
}

TableModel.prototype._prepareData = function() {
    var aMutatedData = this._oData.map(function(oItem) {
        return {
            id: this._validateValue(oItem.id) || '',
            name: this._validateValue(oItem.firstname) || this._validateValue(oItem.name),
            surname: this._validateValue(oItem.surname) || this._validateValue(oItem.lastname),
            born: this._validateValue(oItem.born),
            died: this._validateValue(oItem.died),
            age: this._getAge(oItem.born, oItem.died),
            country: this._validateValue(oItem.bornCountry),
            filterAnchor: this._validateValue(oItem.bornCountryCode),
            description1: 'Born in ' + this._validateValue(oItem.bornCity) + ', ' + this._validateValue(oItem.bornCountry),
            description2: 'Died in ' + this._validateValue(oItem.diedCity) + ', ' + this._validateValue(oItem.diedCountry),
            infoTitle: 'Prizes: ',
            info: oItem.prizes.map(function(infoPiece) {
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
        }
    }, this)
    return aMutatedData;
}

TableModel.prototype.filterData = function(oFilter) {
    var sCategory       = oFilter.first;
    var sCountryCode    = oFilter.second;
    var sYear           = oFilter.third;
    this._aFilteredData = this._prepareData()
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
    console.log(oFilter)
    return this._aFilteredData;
}

TableModel.prototype.sortData = function(key) {
    var oData = this._aFilteredData;
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

module.exports = TableModel;