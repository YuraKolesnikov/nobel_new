import View from './View'
class SelectorView extends View {
    constructor(sDropdownId) {
        super()
        this.oDropdown = document.getElementById(`${sDropdownId}`);
    }

    renderDropdown(aData) {
        let oDefaultOption = this._createElement('option', { 'data-id': 'all' }, 'All');
        this.oDropdown.appendChild(oDefaultOption)
        aData.forEach((item, index) => {
            let sContent = '' + item.name;
            let sCode    = item.code || index;
            let oOption  = this._createElement('option', { 'data-id': sCode }, sContent);
            this.oDropdown.appendChild(oOption)
        }, this);
        this.oDropdown.addEventListener('change', this.handleChange.bind(this))
    }

    handleChange() {
        let sID = this.oDropdown[this.oDropdown.selectedIndex].dataset.id
        this.emit('changeCountry', sID)
    }
}

export default SelectorView;