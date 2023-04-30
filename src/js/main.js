const btn = document.querySelector('.plate2')

btn.addEventListener('click',()=>{
    btn.classList.toggle('active')
})

const nawigacja = document.querySelector('.nav__list')
const btn1 = document.querySelector('.nav__btn')

btn1.addEventListener('click', ()=>{
    nawigacja.classList.toggle('actived')
    nawigacja.classList.contains('actived')?nawigacja.classList.remove('deactivate'):nawigacja.classList.add('deactivate')
})