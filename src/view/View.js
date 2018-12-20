import { EventEmitter } from '../helpers';
class View extends EventEmitter {
    constructor() {
        super()
        this.sortButton = document.getElementById('name');
        this.filterButton = document.getElementById('chemistry');
        this.addEventListeners();
    }
    addEventListeners() {
        this.sortButton.addEventListener('click', this.handleSort.bind(this));
        this.filterButton.addEventListener('click', this.handleFilter.bind(this));
    }
    handleSort() {
        this.emit('sortData', this.sortButton.id);
    }
    handleFilter() {
        this.emit('filterData', this.filterButton.id);
    }
    createElement(tag, props, ...children) {
        const element = document.createElement(tag);
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
}

View.prototype = Object.create(prototype);
View.prototype._super = EventEmitter;





export default View;