import Model from './Model'
import { type } from 'os';
class TableModel extends Model {
    constructor(_sResourceUrl) {
        super(_sResourceUrl)
        this._aFilteredData = []
    }

    _getObjectById(sID) {
        return this._aFilteredData.find(element => element.id == sID)
    }
    
    _validateValue(sValue) {
        return sValue === undefined ? sValue = 'Unknown' : sValue === '0000-00-00' ? sValue = '' : sValue
    }
    
    _getAge(sBorn, sDied) {
        let nAge
        if (sDied !== '0000-00-00') {
            nAge = parseInt(sDied, 10) - parseInt(sBorn, 10)
        }
        else {
            const d = new Date().toISOString().substr(0, 10)
            nAge = parseInt(d, 10) - parseInt(sBorn, 10)
        }
        return nAge;
    }
    
    _prepareData() {
        const aMutatedData = this._oData.map(item => ({
                id: parseInt(this._validateValue(item.id), 10) || '',
                _id: item._id,
                name: this._validateValue(item.firstname) || this._validateValue(item.name),
                surname: this._validateValue(item.surname) || this._validateValue(item.lastname),
                born: this._validateValue(item.born),
                died: this._validateValue(item.died),
                age: this._getAge(item.born, item.died),
                country: this._validateValue(item.bornCountry),
                filterAnchor: this._validateValue(item.bornCountryCode),
                description1: 'Born in ' + this._validateValue(item.bornCity) + ', ' + this._validateValue(item.bornCountry),
                description2: 'Died in ' + this._validateValue(item.diedCity) + ', ' + this._validateValue(item.diedCountry),
                infoTitle: 'Prizes: ',
                info: item.prizes.map(infoPiece => ({
                    year: infoPiece.year,
                    subject: infoPiece.category,
                    caption: this._validateValue(infoPiece.motivation),
                    additionalInfo: infoPiece.affiliations
                        .map(location => ({
                            name: this._validateValue(location.name),
                            city: this._validateValue(location.city),
                            country: this._validateValue(location.country)
                    }))
                }))
        }), this)
        return aMutatedData 
    }

    filterData(oFilter) {
        let sCategory = oFilter.category
        sCategory === 'all' ? sCategory = '' : sCategory

        let sCountryCode = oFilter.country;
        sCountryCode === 'all' ? sCountryCode = '' : sCountryCode

        let sYear = oFilter.year;
        sYear === 'all' ? sYear = '' : sYear
        
        this._aFilteredData = this._prepareData()
            .filter(object => {
                const oInfo = object.info.filter(item => 
                    (sCategory && item.subject !== sCategory ? false : true) &&
                    (sYear && item.year != sYear ? false : true))
                return oInfo.length > 0
            })
            .filter(object => sCountryCode && object.filterAnchor != sCountryCode ? false : true)
        return this._aFilteredData
    }

    sortData(sKey = 'id') {
        let oData = this._aFilteredData
        this.ascending = !this.ascending
        this.ascending == true
        ? oData.sort((a, b) => {
            return typeof a[sKey] == 'string'
            ? a[sKey] > b[sKey] ? 1 : -1
            : parseInt(a[sKey], 10) > parseInt(b[sKey], 10) ? 1 : -1
        })
        : oData.sort((a, b) => {
            return typeof a[sKey] == 'string'
            ? a[sKey] < b[sKey] ? 1 : -1
            : parseInt(a[sKey], 10) < parseInt(b[sKey], 10) ? 1 : -1
        })
        return oData
    }
}

export default TableModel;