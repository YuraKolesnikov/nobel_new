import View from './View'
class SelectorView extends View {
  constructor(oEvent, sDropdownId) {
    super()
    this.oEvent = oEvent
    this.oDropdown = document.getElementById(`${sDropdownId}`)
  }

  renderDropdown(aData) {
    let oDefaultOption = this._createElement('option', {className: 'dropdown-primary__option',  'data-id': 'all'}, 'All')
    this.oDropdown.appendChild(oDefaultOption)
    aData.forEach((item, index) => {
        const { code, name } = item
        let sCode   = code || index
        let oOption = this._createElement('option', {className: 'dropdown-primary__option', 'data-id': sCode}, `${name}`)
        this.oDropdown.appendChild(oOption)
    }, this);
    this.oDropdown.addEventListener('change', this.handleChange.bind(this))
  }

  handleChange() {
    let sID = this.oDropdown[this.oDropdown.selectedIndex].dataset.id
    this.emit(this.oEvent, sID)
  }
}

export default SelectorView