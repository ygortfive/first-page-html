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
})

maximize.addEventListener("click", () => {
  if (modal.classList.contains('maximize')) {
    return modal.classList.remove('maximize')
  }
  return modal.classList.add('maximize')
})

