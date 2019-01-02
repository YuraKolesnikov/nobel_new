import View from './View'
class ModalView extends View {
    constructor(sModalWindowID) {
        super()
        this.oModalWindow = document.getElementById(`${sModalWindowID}`)
    }

    _adaptHeight() {
        /*  TODO: Finish function */
    }

    renderModal(oItem) {
        this.oModalWindow.classList.add('visible')
        this.oModalWindow.classList.remove('hidden')
        let oName, oSpan, oLine, oDescription, oCaption, oInfo, oModalHead, oModalBody;

        /* Rendering modalWindow head */
        oName = this._createElement('h2', { className: 'modal-window__name' }, `${oItem.name} ${oItem.surname}`)
        oSpan = this._createElement('span', { className: 'modal-window__span' }, `${oItem.born} - ${oItem.died}`)
        oLine = this._createElement('hr', { className: 'modal-window__hr' })
        oModalHead = this._createElement('div', { className: 'modal-window__head flex' }, oName, oSpan, oLine)

        /* Rendering modalWindow body */
        let text = `Test\nSecond test`
        let secondText = `<p>Test</p>`
        oDescription = this._createElement('div', { className: 'modal-window__description' }, text)
        oCaption = this._createElement('h3', { className: 'modal-window__caption' }, `${oItem.infoTitle}:`)
        //oInfo = this._createElement('ul', { className: 'modal-window__info' })
        oItem.info.forEach(item => {
            console.log(item)
        }, this)
        oModalBody = this._createElement('div', { className: 'modal-window__body'}, oDescription, oCaption)
        this.oModalWindow.appendChild(oModalHead)
        this.oModalWindow.appendChild(oModalBody)
        return this.oModalWindow
    }
}

export default ModalView