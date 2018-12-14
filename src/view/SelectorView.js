var View = require('./View')
function SelectorView() {
}

SelectorView.prototype = Object.create(View.prototype);
SelectorView.prototype._super = View;

SelectorView.prototype.renderDropdown = function(aData, sDropdownID) {
    var oDropdown = document.getElementById(sDropdownID);
    var oDefaultOption = this._createElement('option', { 'data-id': 'all' }, 'All');
    oDropdown.appendChild(oDefaultOption)
    aData.forEach(function(item, index) {
        var sContent = '' + item.name;
        var sCode    = item.code || index;
        var oOption  = this._createElement('option', { 'data-id': sCode }, sContent);
        oDropdown.appendChild(oOption)
    }, this);
    oDropdown.addEventListener('change', this.filterByCountry.bind(this))
}

SelectorView.prototype.filterByCountry = function() {
    this.sOption = event.target[event.target.selectedIndex]
    console.log('Show only ' + this.sOption.textContent)
}

module.exports = SelectorView;