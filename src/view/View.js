function View() {
    this.oTable = document.getElementById(sTableId)
}

View.prototype._createElement = function(tag, props) {
    var element = document.createElement(tag);

    Object.keys(props).forEach(function (key) {
        if (key.startsWith('data-')) {
            element.setAttribute(key, props[key]);
        } else {
            element[key] = props[key];
        }
    });

    for (var len = arguments.length, children = Array(len > 2 ? len - 2 : 0), key = 2; key < len; key++) {
        children[key - 2] = arguments[key];
    }

    children.forEach(function (child) {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        element.appendChild(child);
    });
    return element;
}

View.prototype._clearContainer = function(oContainer) {
    oContainer.innerHTML = '';
}

module.exports = View;