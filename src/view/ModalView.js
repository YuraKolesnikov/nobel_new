import View from './View'
class ModalView extends View {
    constructor(sModalWindowID) {
        super()
        this.oModalWindow = document.getElementById(`${sModalWindowID}`)
    }

    _adaptHeight(id) {
        this.oModalWindow.style.height = 220 + 70*id + 'px'
        return this.oModalWindow
    }

    _closeWindow({ target }) {
        let oWindow = target.parentNode.parentNode
        oWindow.classList.add('hidden')
        return oWindow
    }

    renderModal(oItem) {
        this.oModalWindow.textContent = ''
        this.oModalWindow.classList.add('visible')
        this.oModalWindow.classList.remove('hidden')

        let oName, oSpan, oDescription, oTitle, oCaption, oAdditionalInfo, oInfoList, oLearnMore, oButtonClose, oModalHead, oModalBody;

        /* Rendering modalWindow head */
        oName = this._createElement('h2', { className: 'modal-window__name' }, `${oItem.name} ${oItem.surname}`)
        oSpan = this._createElement('span', { className: 'modal-window__span' }, `${oItem.born} - ${oItem.died}`)
        oModalHead = this._createElement('div', { className: 'modal-window__head flex' }, oName, oSpan)

        /* Rendering modalWindow body */
        let desc1 = this._createElement('p', { className: 'modal-window__description' }, oItem.description1)
        let desc2 = this._createElement('p', { className: 'modal-window__description' }, oItem.description2)
        oDescription = this._createElement('div', { className: 'modal-window__description' }, desc1, desc2)
        oTitle = this._createElement('h3', { className: 'modal-window__caption' }, `${oItem.infoTitle}:`)
        oInfoList = this._createElement('ul', { className: 'modal-window__info' })
        oItem.info.forEach(item => {
            let yearAndSubject = this._createElement('h4', { className: 'modal-window__year-and-subject' }, `${item.year}, ${item.subject}`)
            /* Logical expression for better display. If one of the elements is unknown, render 'Place unknown' string */
            if (item.additionalInfo[0].city === 'Unknown' || item.additionalInfo[0].country === 'Unknown') {
                oAdditionalInfo = this._createElement('p', {}, `Place unknown`)
            } else {
                oAdditionalInfo = this._createElement('p', {}, `
                    ${item.additionalInfo[0].name}, 
                    ${item.additionalInfo[0].city}, 
                    ${item.additionalInfo[0].country}`)
            }
            let oCaption = this._createElement('p', { className: 'italic' }, item.caption)
            let listItem = this._createElement('li', { className: 'modal-window__info-item flex' }, yearAndSubject, oAdditionalInfo, oCaption)
            oInfoList.appendChild(listItem)
        }, this)
        this._adaptHeight(oItem.info.length)

        /* Button and link creating */
        oLearnMore = this._createElement('a', { className: 'modal-window__link', id: 'learn_more', href: `https://www.google.com/search?q=${oItem.name}+${oItem.surname}` }, 'Learn more')
        oButtonClose = this._createElement('button', { className: 'modal-window__button-close' }, '+')
        oButtonClose.addEventListener('click', this._closeWindow.bind(this))

        oModalBody = this._createElement('div', { className: 'modal-window__body'}, oDescription, oTitle, oInfoList, oLearnMore, oButtonClose)

        this.oModalWindow.appendChild(oModalHead)
        this.oModalWindow.appendChild(oModalBody)
        return this.oModalWindow
    }
}

export default ModalView