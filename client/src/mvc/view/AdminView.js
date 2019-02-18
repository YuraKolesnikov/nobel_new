import View from './View'
class AdminView extends View {
  constructor() {
    super()
  }

  renderPostForm(parent, content) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    rootElement.classList.add('visible')
    rootElement.classList.remove('hidden')

    const postForm = this._createElement('form', {})
    postForm.innerHTML = content
    /* Subscribing for event */
    postForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const data = Array.from(postForm.elements)
      const dataForEvent = {}
      data.forEach(item => {
        let name = item.name || item.dataset.name
        let val = item.value || item.dataset.id
        if (name === 'category' || name === 'gender') {
          val = val.toLowerCase()
        }
        if (name === 'died' && val === null) {
          val = '0000-00-00'
        }
        dataForEvent[name] = val
        this.emit('laureateUpdated', dataForEvent)
      })
      
    })
    rootElement.appendChild(postForm)
  }

  renderPatchForm(parent, content) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    rootElement.classList.add('visible')
    rootElement.classList.remove('hidden')

    const postForm = this._createElement('form', {})
    postForm.innerHTML = content
    //const patchForm = this._createElement('form', { 'method': 'PATCH' })
    
    /* patchForm.addEventListener('submit', ({target}) => {
      target.preventDefault()
      this.emit('laureateEdited', data)
    }) */
    rootElement.appendChild(postForm)
    //document.getElementById(parent).appendChild(patchForm)
  }

  renderDeleteForm(parent, content) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    rootElement.classList.add('visible')
    rootElement.classList.remove('hidden')

    const deleteForm = this._createElement('form', {})
    deleteForm.innerHTML = content

    deleteForm.addEventListener('submit', ({target}) => {
      target.preventDefault()
      /* Id - input value */
      this.emit('laureateDeleted', id)
    })

    document.getElementById(parent).appendChild(deleteForm)
  }

  renderButton(name, callback, id, classes) {
    const button = this._createElement('button', { className: classes, id: id }, name)
    //button.addEventListener('click', () => callback())
    return button
  }
}

export default AdminView