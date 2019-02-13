import View from './View'
class ButtonView extends View {
  constructor(aData, oEvent, sButtonSetID, sFunctionality) {
    super()
    this.aData          = aData
    this.oEvent         = oEvent
    this.sFunctionality = sFunctionality
    this.sButtonSet     = document.getElementById(`${sButtonSetID}`)
    this.renderButtonSet()
  }

  renderButtonSet() {
    this._clearContainer(this.sButtonSet)
    let sClassForButton, sTagForButton
    if (this.sFunctionality === 'table-header') {
        sClassForButton  = 'table-header__cell'
        sTagForButton    = 'th'
    } else if (this.sFunctionality === 'sidebar-buttons') {
        sClassForButton  = 'btn btn-primary'
        sTagForButton    = 'a'
    } 
    this.aData.forEach(item => {
        const oButton = this._createElement(sTagForButton, { className: sClassForButton + `${item.small ? ' table-header__cell-sm' : ''}`, 'data-id': item.id }, `${item.title}`)
        oButton.addEventListener('click', this.handleClick.bind(this))
        this.sButtonSet.appendChild(oButton)
    }, this)
    return this.sButtonSet
  }

  handleClick({ target }) {
    this.emit(this.oEvent, target.dataset.id)
  }
}

export default ButtonView