const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')
const seccion1 = document.querySelector('#seccion1')
const seccion2 = document.querySelector('#seccion2')
const seccion3 = document.querySelector('#seccion3')

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible")
})

cerrar.addEventListener("click", ()=> {
    nav.classList.remove("visible")
})

seccion1.addEventListener("click", ()=> {
    nav.classList.remove("visible")
})

seccion2.addEventListener("click", ()=> {
    nav.classList.remove("visible")
})

seccion3.addEventListener("click", ()=> {
    nav.classList.remove("visible")
})