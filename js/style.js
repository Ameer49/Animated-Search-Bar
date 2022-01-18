// const input = document.querySelectorAll('.input');
// const search = document.querySelectorAll('.search');
// const btn = document.querySelectorAll('.btn');

// btn.addEventListener('click',()=>{
//     search.classList.toggle('active');
// })

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})