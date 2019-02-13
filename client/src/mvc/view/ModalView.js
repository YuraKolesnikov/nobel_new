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
        this._clearContainer.call(this.oModalWindow)
        this.oModalWindow.classList.add('visible')
        this.oModalWindow.classList.remove('hidden')

        let oName, oSpan, oDescription, oTitle, oCaption, oAdditionalInfo, oInfoList, oLearnMore, oButtonClose, oModalHead, oModalBody;

        /* Rendering modalWindow head */
        oName = this._createElement('h2', { className: 'd-block text-left title-secondary' }, `${oItem.name} ${oItem.surname}`)
        oSpan = this._createElement('span', { className: 'd-block text-lead my-xxs' }, oItem.born !== '' && oItem.died !== ''  ? `${oItem.born} - ${oItem.died}` : 'Unknown')
        oModalHead = this._createElement('div', {}, oName, oSpan)

        /* Rendering modalWindow body */
        let oDesc1 = this._createElement('p', {}, oItem.description1)
        let oDesc2 = this._createElement('p', {}, oItem.description2)
        oDescription = this._createElement('div', {}, oDesc1, oDesc2)
        oTitle = this._createElement('h3', { className: 'modal-window__caption my-xxs' }, `${oItem.infoTitle}:`)
        oInfoList = this._createElement('ul', { className: 'modal-window__info' })
        /* Rendering info section for modalWindow body */
        oItem.info.forEach(item => {
            let yearAndSubject = this._createElement('h4', { className: 'text-bold' }, `${item.year}, ${item.subject}`)

            /* Logical expression for better display. If one of the elements is unknown, render 'Place unknown' string */
            if (item.additionalInfo[0].city === 'Unknown' || item.additionalInfo[0].country === 'Unknown') {
                oAdditionalInfo = this._createElement('p', {}, `Place unknown`)
            } else {
                oAdditionalInfo = this._createElement('p', {}, `
                    ${item.additionalInfo[0].name}, 
                    ${item.additionalInfo[0].city}, 
                    ${item.additionalInfo[0].country}`)
            }

            let oCaption = this._createElement('p', { className: 'text-italic' }, item.caption)
            let listItem = this._createElement('li', { className: 'modal-window__info-item flex my-xxs' }, yearAndSubject, oAdditionalInfo, oCaption)
            oInfoList.appendChild(listItem)
        }, this)
        
        /* Button and link creating */
        oLearnMore = this._createElement('a', { className: 'nav-link', id: 'learn_more', href: `https://www.google.com/search?q=${oItem.name}+${oItem.surname}`, target: '_blank' }, 'Learn more')
        oButtonClose = this._createElement('button', { className: 'btn-modal-close' }, '+')
        oButtonClose.addEventListener('click', this._closeWindow.bind(this))

        oModalBody = this._createElement('div', { className: 'modal-window__body'}, oDescription, oTitle, oInfoList, oLearnMore, oButtonClose)
        
        /* Building modalWindow */
        this.oModalWindow.appendChild(oModalHead)
        this.oModalWindow.appendChild(oModalBody)
        return this.oModalWindow
    }
}

export default ModalView