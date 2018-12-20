var EventEmitter = require('../controller/EventEmitter')
function View() {
    this.sortButton = document.getElementById('name')
    this.filterButton = document.getElementById('chemistry')
    this.events = {}
    /*  TODO:
    Удалить после тестирования */
    console.log(this.sortButton.id)
    this.addEventListeners()
}

View.prototype = Object.create(EventEmitter.prototype);
View.prototype._super = EventEmitter;

View.prototype.addEventListeners = function() {
    var buttons = [this.sortButton, this.filterButton]
    this.sortButton.addEventListener('click', this.handleSort.bind(this))
    this.filterButton.addEventListener('click', this.handleFilter.bind(this))
    console.log('Event Listeners added!')
    return buttons;
}

View.prototype.handleSort = function() {
    this.emit('sortData', this.sortButton.id)
}

View.prototype.handleFilter = function() {
    this.emit('filterData', this.filterButton.id)
}

View.prototype.createElement = function(sTag, oProps) {
    var element = document.createElement(sTag);

    Object.keys(oProps).forEach(function (key) {
        if (key.startsWith('data-')) {
            element.setAttribute(key, oProps[key]);
        } else {
            element[key] = oProps[key];
        }
    });

    for (var len = arguments.length, children = Array(len > 2 ? len - 2 : 0), key = 2; key < len; key++) {
        children[key - 2] = arguments[key];
    }

    children.forEach(function (oChild) {
        if (typeof oChild === 'string') {
            oChild = document.createTextNode(oChild);
        }

        element.appendChild(oChild);
    });

    return element;
}

module.exports = View;