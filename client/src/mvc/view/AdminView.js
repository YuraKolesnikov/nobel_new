import View from './View'
class AdminView extends View {
  constructor() {
    super()
  }

  _addCloseEvent(target) {
    const closeButton = target.querySelector('.js-close-button')
    console.log(closeButton)
    closeButton.addEventListener('click', () => {
      closeButton.closest('#modal_form').classList.add('hidden')
    })
    return closeButton
  }
  renderPostForm(parent, content) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    rootElement.classList.remove('hidden')

    const postForm = this._createElement('form', {})
    postForm.innerHTML = content
    this._addCloseEvent(postForm)
    /* Subscribing for event */
    postForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const data = Array.from(postForm.querySelectorAll('input, select'))
      console.log(data)
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
      })
      this.emit('laureateCreated', dataForEvent)
    })
    rootElement.appendChild(postForm)
  }

  renderPatchForm(parent, content) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    rootElement.classList.remove('hidden')

    const patchForm = this._createElement('form', {})
    patchForm.innerHTML = content
    this._addCloseEvent(patchForm)
    
    patchForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const data = Array.from(patchForm.querySelectorAll('input, select'))
      console.log(data)
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
      })
      console.log('Data for event')
      console.log(dataForEvent)
      this.emit('laureateUpdated', dataForEvent)
    })
    rootElement.appendChild(patchForm)
    //document.getElementById(parent).appendChild(patchForm)
  }

  renderDeleteForm(parent, content) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    rootElement.classList.remove('hidden')

    const deleteForm = this._createElement('form', {})
    deleteForm.innerHTML = content
    this._addCloseEvent(deleteForm)
    deleteForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const id = deleteForm.querySelector('input').value
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