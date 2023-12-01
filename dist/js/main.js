const btn = document.querySelector(".navbar-toggler");
const lista  = document.querySelector(".list");
const close = document.querySelector(".btn-close-dark")


btn.addEventListener("click",()=>{
btn.style.display = `none`
lista.style.visibility = `visible`
close.style.visibility = `visible`

lista.style.transform = `translateX(0)`
close.style.transform = `translateX(0)`
})
close.addEventListener("click",()=>{
    lista.style.transform = `translateX(100%)`
    close.style.transform = `translateX(120%)`
    btn.style.display = `block`
    lista.style.visibility = `hidden`
close.style.visibility = `hidden`
})
