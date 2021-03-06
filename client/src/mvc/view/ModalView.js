import View from './View'
class ModalView extends View {
  constructor(sModalWindowID) {
    super()
    this.oModalWindow = document.getElementById(`${sModalWindowID}`)
  }

  _closeWindow({ target }) {
    let oWindow = target.parentNode.parentNode
    oWindow.classList.add('hidden')
    return oWindow
  }

  renderModal(oItem) {
    const {firstname, surname, born, died, bornCity, bornCountry, diedCity, diedCountry, infoTitle, year, category, prizes} = oItem
    this._clearContainer.call(this.oModalWindow)
    this.oModalWindow.classList.add('visible')
    this.oModalWindow.classList.remove('hidden')

    let oName, oSpan, oDescription, oTitle, oAffiliations, oInfoList, oLearnMore, oButtonClose, oModalHead, oModalBody;

    /* Rendering modalWindow head */
    oName = this._createElement('h2', {className: 'd-block text-left title-secondary'}, `${firstname} ${surname}`)
    oSpan = this._createElement('span', {className: 'd-block text-lead my-xxs'}, born !== '' && died !== ''  ? `${born} - ${died}` : 'Unknown')
    oModalHead = this._createElement('div', {}, oName, oSpan)

    /* Rendering modalWindow body */
    const bornIn = `Born in ${bornCity}, ${bornCountry}`
    const diedIn = `Died in ${diedCity}, ${diedCountry}`
    let oDesc1 = this._createElement('p', {}, bornIn)
    let oDesc2 = this._createElement('p', {}, diedIn)
    oDescription = this._createElement('div', {}, oDesc1, oDesc2)
    oTitle = this._createElement('h3', {className: 'modal-window__caption my-xxs'}, `${infoTitle}:`)
    oInfoList = this._createElement('ul', {className: 'modal-window__info'})
    /* Rendering info section for modalWindow body */
    prizes.forEach(item => {
      let yearAndSubject = this._createElement('h4', {className: 'text-bold'}, `${item.year}, ${item.category}`)

      /* Logical expression for better display. If one of the elements is unknown, render 'Place unknown' string */
      if (item.affiliations[0].city === 'Unknown' 
          || item.affiliations[0].bornCountry === 'Unknown') {
          oAffiliations = this._createElement('p', {}, `Place unknown`)
      } else {
          oAffiliations = this._createElement('p', {}, `
          ${item.affiliations[0].name}, 
          ${item.affiliations[0].city}, 
          ${item.affiliations[0].country}`)
      }

      let oMotivation = this._createElement('p', {className: 'text-italic'}, item.motivation)
      let listItem = this._createElement('li', {className: 'modal-window__info-item flex my-xxs'}, yearAndSubject, oAffiliations, oMotivation)
      oInfoList.appendChild(listItem)
    }, this)
        
    /* Button and link creating */
    oLearnMore = this._createElement('a', {className: 'nav-link', id: 'learn_more', href: `https://www.google.com/search?q=${firstname}+${surname}`, target: '_blank'}, 'Learn more')
    oButtonClose = this._createElement('button', {className: 'btn-modal-close js-close-button'}, '+')
    oButtonClose.addEventListener('click', this._closeWindow.bind(this))

    oModalBody = this._createElement('div', {className: 'modal-window__body'}, oDescription , oTitle, oInfoList, oLearnMore, oButtonClose)
    /* Building modalWindow */
    this.oModalWindow.appendChild(oModalHead)
    this.oModalWindow.appendChild(oModalBody)
    return this.oModalWindow
  }
}

export default ModalView