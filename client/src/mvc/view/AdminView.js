import View from './View'
class AdminView extends View {
  constructor() {
    super()
  }

  renderPostForm(parent) {
    const postForm = this._createElement('form', { 'method': 'POST' })
    
    postForm.addEventListener('submit', this.handlePost.bind(this))
    document.getElementById(parent).appendChild(postForm)
  }

  renderPatchForm(parent) {
    const patchForm = this._createElement('form', { 'method': 'PATCH' })
    
    patchForm.addEventListener('submit', this.handlePatch.bind(this))
    document.getElementById(parent).appendChild(patchForm)
  }

  renderButton(action, name, callback) {
    const button = this._createElement('button', { 'type': action }, name)
    button.addEventListener('click', () => callback())
    return button
  }

  handlePost(data) {
    this.emit('laureateCreated', data)
  }

  handlePatch(data) {
    this.emit('laureateEdited', data)
  }
}

export default AdminView