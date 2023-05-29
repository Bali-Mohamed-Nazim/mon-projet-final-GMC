const btn = document.querySelector('.btn')
const body = document.querySelector('body')
const where = document.querySelector('#where')


btn.addEventListener('click', () => {
    body.classList.toggle('sunmode')
})