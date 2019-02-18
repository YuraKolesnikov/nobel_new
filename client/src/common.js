(function () {
  const addListeners = () => {
    const closeButtons = Array.from(document.querySelectorAll('.js-close-button'))
    if (closeButtons.length > 0) {
      closeButtons.forEach(button => button.addEventListener('click', ({target}) => console.log(target.parentNode)))
    }
  }
})()