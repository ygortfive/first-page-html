const contents = document.querySelectorAll('.content')
const iframe = document.querySelector('iframe')
const close = document.querySelector('.close-modal')
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const maximize = document.querySelector('.maximize-modal')

for(let content of contents) {
  content.addEventListener("click", () => {
    iframe.src = `https://rocketseat.com.br/${content.getAttribute('id')}`
    modalOverlay.classList.add('active')
  })
}

close.addEventListener("click", () => {
  modalOverlay.classList.remove('active')
  validMaximize()
})

maximize.addEventListener("click", () => {
  if (validMaximize()) return 
  return modal.classList.add('maximize')
})

function validMaximize() {
  if (modal.classList.contains('maximize')) {
    modal.classList.remove('maximize')
    return true
  }
  return false
}
