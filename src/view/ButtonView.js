import View from './View'
class ButtonView extends View {
    constructor(aData, oEvent, sButtonSetID, sFunctionality) {
        super()
        this.aData          = aData
        this.oEvent         = oEvent
        this.sButtonSet     = document.getElementById(`${sButtonSetID}`)
        this.sFunctionality = sFunctionality
        this.renderButtonSet()
    }

    renderButtonSet() {
        this._clearContainer(this.sButtonSet)
        let classForButton, tagForButton
        if (this.sFunctionality === 'table-header') {
            classForButton  = 'table-header__cell'
            tagForButton    = 'th'
        } else if (this.sFunctionality === 'sidebar-buttons') {
            classForButton  = 'button sidebar__filter-button'
            tagForButton    = 'a'
        }
        this.aData.forEach(item => {
            //classForButton = item.small === true ? 'table-header__cell-sm' : classForButton
            let oButton = this._createElement(tagForButton, { className: classForButton + `${item.small ? ' table-header__cell-sm' : ''}`, 'data-id': item.id }, `${item.title}`)
            oButton.addEventListener('click', this.handleClick.bind(this))
            this.sButtonSet.appendChild(oButton)
        }, this)
        return this.sButtonSet
    }

    handleClick({ target }) {
        console.log(`${this.oEvent} by ${target.dataset.id}`)
        //this.emit(this.oEvent, target.dataset.id)
    }
}

export default ButtonView