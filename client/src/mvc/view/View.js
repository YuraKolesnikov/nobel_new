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
    const regex = /<(.|\n)*?>/
    aChildren.forEach(child => {
      if (typeof child === 'string') {
        regex.test(child)
          ? oElement.innerHTML = child
          : oElement.textContent = child
      }
      if (child instanceof HTMLElement) {
        oElement.appendChild(child)
      }
    });
    return oElement
  }

  _clearContainer() {
    while(this.firstChild) { this.removeChild(this.firstChild) }
    return this
  }

  _toggleClasses(first, second) {
    this.classList.add(first)
    this.classList.remove(second)
    return this
  }
}

export default View