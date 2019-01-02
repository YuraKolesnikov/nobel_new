import Model from './Model'
class TableModel extends Model {
    constructor(_sResourceUrl) {
        super(_sResourceUrl)
        this._aFilteredData = [];
    }
    _validateValue(sValue) {
        return sValue === undefined ? sValue = 'Unknown' : sValue === '0000-00-00' ? sValue = '-' : sValue;
    }
    _getAge(sBorn, sDied) {
        let nAge;
        if (sDied !== '0000-00-00') {
            nAge = parseInt(sDied, 10) - parseInt(sBorn, 10);
        }
        else {
            var d = new Date().toISOString().substr(0, 10);
            nAge = parseInt(d, 10) - parseInt(sBorn, 10);
        }
        return nAge;
    }
    _prepareData() {
        const aMutatedData = this._oData.map(oItem => ({
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
                info: oItem.prizes.map(function (infoPiece) {
                    return {
                        year: infoPiece.year,
                        subject: infoPiece.category,
                        caption: infoPiece.motivation,
                        additionalInfo: infoPiece.affiliations
                        .reduce((result, filter) => {
                            result.name     = filter.name;
                            result.city     = filter.city;
                            result.country  = filter.country
                            return result;
                        }, {})
                    };
                })
        }), this)
        return aMutatedData;
    }
    filterData(oFilter) {
        let sCategory = oFilter.category;
        let sCountryCode = oFilter.country;
        let sYear = oFilter.year;
        this._aFilteredData = this._prepareData()
            .filter(oObject => {
                sCategory === 'all' ? sCategory = '' : sCategory;
                sYear === 'all' ? sYear = '' : sYear;
                const oInfo = oObject.info.filter(item => {
                    return (sCategory && item.subject !== sCategory ? false : true) && (sYear && item.year != sYear ? false : true);
                });
                return oInfo.length > 0;
            })
            .filter(oObject => {
                sCountryCode === 'all' ? sCountryCode = '' : sCountryCode;
                return sCountryCode && oObject.filterAnchor != sCountryCode ? false : true;
            });
        console.log(this._aFilteredData[0])
        return this._aFilteredData;
    }
    sortData(key) {
        let oData = this._aFilteredData;
        key = key === undefined ? 'id' : key
        console.log(key)
        this.ascending = !this.ascending;
        this.ascending === true
        ? oData.sort((a, b) => a[key] > b[key] ? 1 : -1)
        : oData.sort((a, b) => a[key] < b[key] ? 1 : -1);
        return oData;
    }
}

export default TableModel;