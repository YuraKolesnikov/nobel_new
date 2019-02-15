import View from './View'
class AdminView extends View {
  constructor() {
    super()
  }

  renderPostForm(parent, { bio, gender, prizes, affiliations }) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    /* Creating form */
    let postForm = this._createElement('form', { className: 'test', })
    /* Creating bio */
    bio.forEach(input => {
      const inputField = this._createElement('input', { type: 'text', name: input.name, placeholder: input.placeholder })
      postForm.appendChild(inputField)
    });

    /* Creating gender */
    const genderSelect = this._createElement('select', { 'data-name': 'gender' })
    const options = gender.options
    options.forEach(option => {
      const o = this._createElement('option', { 'data-id': option.toLowerCase() }, option)
      genderSelect.appendChild(o)
    });
    postForm.appendChild(genderSelect)

    /* Creating prizes */
    const { year, category, motivation } = prizes
    const yearInput = this._createElement(year.tag, { type: year.type, name: year.name, placeholder: year.placeholder })

    const categorySelect = this._createElement(category.tag, { 'data-name': 'category' })
    category.options.forEach(item => {
      const option = this._createElement('option', {}, item)
      categorySelect.appendChild(option)
    })
    const motivationInput = this._createElement(motivation.tag, { name: motivation.name, placeholder: motivation.placeholder, cols: motivation.size.cols, rows: motivation.size.rows })
    
    postForm.appendChild(yearInput)
    postForm.appendChild(categorySelect)
    postForm.appendChild(motivationInput)

    /* Creating affiliations */
    affiliations.forEach(element => {
      const inputField = this._createElement('input', { type: 'text', name: element.name, placeholder: element.placeholder })
      postForm.appendChild(inputField)
    });

    const submitButton = this._createElement('input', { type: 'submit', name: 'Submit' }, 'Submit')
    postForm.appendChild(submitButton)

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
      })
      //this.emit('laureateCreated', dataForEvent)
      this.emit('laureateUpdated', dataForEvent)
    })
    rootElement.appendChild(postForm)
  }

  renderPatchForm(parent) {
    const rootElement = document.getElementById(parent)
    this._clearContainer.call(rootElement)
    const myElement = this._createElement('h1', {}, 'Test')
    rootElement.appendChild(myElement)
    //const patchForm = this._createElement('form', { 'method': 'PATCH' })
    
    /* patchForm.addEventListener('submit', ({target}) => {
      target.preventDefault()
      this.emit('laureateEdited', data)
    }) */

    //document.getElementById(parent).appendChild(patchForm)
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

  renderButton(name, callback, id, classes) {
    const button = this._createElement('button', { className: classes, id: id }, name)
    button.addEventListener('click', () => callback())
    return button
  }
}

export default AdminView