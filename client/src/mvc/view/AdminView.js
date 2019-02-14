import View from './View'
class AdminView extends View {
  constructor() {
    super()
  }

  renderPostForm(parent) {
    const postForm = this._createElement('form', { 'method': 'POST' })
    
    postForm.addEventListener('submit', ({target}) => {
      target.preventDefault()
      /* Data - input values, in array or object */
      this.emit('laureateCreated', data)
    })

    document.getElementById(parent).appendChild(postForm)
  }

  renderPatchForm(parent) {
    const patchForm = this._createElement('form', { 'method': 'PATCH' })
    
    patchForm.addEventListener('submit', ({target}) => {
      target.preventDefault()
      /* Data - input values, in array or object */
      this.emit('laureateEdited', data)
    })

    document.getElementById(parent).appendChild(patchForm)
  }

  renderDeleteForm(parent) {
    const deleteForm = this._createElement('form', { method: 'DELETE' })

    deleteForm.addEventListener('submit', ({target}) => {
      target.preventDefault()
      /* Id - input value */
      this.emit('laureateDeleted', id)
    })

    document.getElementById(parent).appendChild(deleteForm)
  }

  renderButton(action, name, callback) {
    const button = this._createElement('button', { 'type': action }, name)
    button.addEventListener('click', () => callback())
    return button
  }
}

export default AdminView