import Model from './Model'
class TableModel extends Model {
  constructor(_sResourceUrl) {
      super(_sResourceUrl)
      this._aFilteredData = []
      this.ascending = true
      this.routes = {
        get: '/api/laureates',
        post: '/api/laureates',
        delete: '/api/laureates/delete',
        patch: '/api/laureates/patch'
      }
  }

  _getObjectById(sID) {
      return this._aFilteredData.find(element => element.id == sID)
  }
    
  _getAge(sBorn, sDied) {
    let nAge
    if (sDied !== '0000-00-00') {
        nAge = parseInt(sDied, 10) - parseInt(sBorn, 10)
    } else {
        const d = new Date().toISOString().substr(0, 10)
        nAge = parseInt(d, 10) - parseInt(sBorn, 10)
    }
    return nAge;
  }
    
  _prepareData() {
    const aMutatedData = this._oData.map(item => ({
      id: parseInt(this._validateValue(item.id), 10) || '',
      _id: item._id,
      firstname: this._validateValue(item.firstname) || this._validateValue(item.name),
      surname: this._validateValue(item.surname) || this._validateValue(item.lastname),
      born: this._validateValue(item.born),
      died: this._validateValue(item.died),
      age: this._getAge(item.born, item.died),
      bornCountry: this._validateValue(item.bornCountry),
      bornCountryCode: this._validateValue(item.bornCountryCode),
      bornCity: this._validateValue(item.bornCity),
      diedCity: this._validateValue(item.diedCity),
      infoTitle: 'Prizes',
      prizes: item.prizes.map(prize => ({
          year: prize.year,
          category: prize.category,
          motivation: this._validateValue(prize.motivation),
          affiliations: prize.affiliations
              .map(location => ({
                  name: this._validateValue(location.name),
                  city: this._validateValue(location.city),
                  country: this._validateValue(location.country)
          }))
      }))
    }), this)
    return aMutatedData 
  }
  
  filterData({ category: sCategory, country: sCountryCode, year: sYear }) {
    /* Validating data */
    sCategory === 'all' ? sCategory = '' : sCategory
    sCountryCode === 'all' ? sCountryCode = '' : sCountryCode
    sYear === 'all' ? sYear = '' : sYear

    this._aFilteredData = this._prepareData()
        .filter(object => {
            const oPrizes = object.prizes.filter(item => 
                (sCategory && item.category !== sCategory ? false : true) &&
                (sYear && item.year != sYear ? false : true))
            return oPrizes.length > 0
        })
        .filter(object => sCountryCode && object.bornCountryCode != sCountryCode ? false : true)
    return this._aFilteredData
  }

  sortData(sKey = 'id') {
    let oData = this._aFilteredData
    this.ascending = !this.ascending

    const sortAsStringAscending = (a, b) => a[sKey] < b[sKey] ? 1 : -1
    const sortAsStringDescending = (a, b) => a[sKey] > b[sKey] ? 1 : -1

    const sortAsIntegerAscending = (a, b) => parseInt(a[sKey], 10) > parseInt(b[sKey], 10) ? 1 : -1
    const sortAsIntegerDescending = (a, b) => parseInt(a[sKey], 10) < parseInt(b[sKey], 10) ? 1 : -1

    const sortAscending = (a, b) => {
        return typeof a[sKey] == 'string'
        ? sortAsStringAscending(a, b)
        : sortAsIntegerAscending(a, b)
    }

    const sortDescending = (a, b) => {
        return typeof a[sKey] == 'string'
        ? sortAsStringDescending(a, b)
        : sortAsIntegerDescending(a, b)
    }

    this.ascending === true
    ? oData.sort((a, b) => sortAscending(a, b))
    : oData.sort((a, b) => sortDescending(a, b))
    return oData
  }

  createLaureate(data) {
    const { id, firstname, surname } = data
    return fetch(this.routes.post, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(`Laureate with id ${id} and full name ${firstname} ${surname} successfully created!`))
    .catch(e => console.log(e))
  }

  updateLaureate(data) {
    const { id, firstname, surname } = data
    return fetch(`${this.routes.patch}/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(`Laureate with id ${id} and full name ${firstname} ${surname} successfully updated!`))
    .catch(e => console.log(e))
  }

  deleteLaureate(id) {
    return fetch(`${this.routes.delete}/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => alert(`Laureate with id ${data.id} successfully deleted!`))
    .catch(e => console.log(e))
  }
}

export default TableModel;