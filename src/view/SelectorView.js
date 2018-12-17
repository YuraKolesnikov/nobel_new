var View = require('./View')
function SelectorView(oURLParser) {
    
}

SelectorView.prototype = Object.create(View.prototype);
SelectorView.prototype._super = View;

SelectorView.prototype.renderDropdown = function(aData, sDropdownID, fnCallback) {
    var oDropdown = document.getElementById(sDropdownID);
    var oDefaultOption = this._createElement('option', { 'data-id': 'all' }, 'All');
    oDropdown.appendChild(oDefaultOption)
    aData.forEach(function(item, index) {
        var sContent = '' + item.name;
        var sCode    = item.code || index;
        var oOption  = this._createElement('option', { 'data-id': sCode }, sContent);
        oDropdown.appendChild(oOption)
    }, this);
    
    oDropdown.addEventListener('change', function() {
        let a = event.target[event.target.selectedIndex].dataset.id
        fnCallback(a)
    })
}

module.exports = SelectorView;