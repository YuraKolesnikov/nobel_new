import EventEmitter from '../helpers'
class View extends EventEmitter {
    constructor() {
        super()
    }

    handleSort() {
        this.emit('sortData', this.sortButton.id)
    }

    handleFilter() {
        this.emit('filterData', this.filterButton.id)
    }

    _createElement(sTag, oProps, ...aChildren) {
        const oElement = document.createElement(sTag)
        Object.keys(oProps).forEach(key => {
            key.startsWith('data-')
            ? oElement.setAttribute(key, oProps[key])
            : oElement[key] = oProps[key];
        });
    
        aChildren.forEach(child => {
            typeof child === 'string'
            ? child = document.createTextNode(child)
            : 0
    
            oElement.appendChild(child)
        });
        return oElement
    }

    _clearContainer() {
        while(this.firstChild) { this.removeChild(this.firstChild) }
        return this
    }
}

export default View