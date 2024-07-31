const modal = document.querySelector('.modal')
const btnOpen = document.querySelector('.btn1')
const btnClose = document.querySelector('.btn2')

btnOpen.addEventListener('click', () => {
    modal.classList.add('open')
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('open')
})