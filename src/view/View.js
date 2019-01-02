import EventEmitter from '../helpers';
class View extends EventEmitter {
    constructor() {
        super()
        /* TODO: Здесь будут массивы с кнопками и селекты с опциями */
        this.sortButton = document.getElementById('name');
        this.filterButton = document.getElementById('chemistry');
        //this._addEventListeners();
    }
    //_addEventListeners() {
    //    this.sortButton.addEventListener('click', this.handleSort.bind(this));
    //    this.filterButton.addEventListener('click', this.handleFilter.bind(this));
    //}
    handleSort() {
        this.emit('sortData', this.sortButton.id);
    }
    handleFilter() {
        this.emit('filterData', this.filterButton.id);
    }
    _createElement(tag, props, ...children) {
        const element = document.createElement(tag);
        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function(searchString, position) {
              position = position || 0;
              return this.indexOf(searchString, position) === position;
            };
        }
        Object.keys(props).forEach(key => {
            key.startsWith('data-')
            ? element.setAttribute(key, props[key])
            : element[key] = props[key];
        });
    
        children.forEach(child => {
            typeof child === 'string'
            ? child = document.createTextNode(child)
            : 0
    
            element.appendChild(child);
        });
        return element;
    }
    _clearContainer() {
        while(this.firstChild) { this.removeChild(this.firstChild) }
        return this;
    }
}

export default View;