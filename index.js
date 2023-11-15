
const burgerIcon = document.querySelector(".fa-bars-staggered")
const meniu = document.querySelector(".men")
const closeMeniu = document.querySelector(".fa-circle-xmark")
const container = document.querySelector(".container")
 

burgerIcon.addEventListener("click", ()=>{
    meniu.classList.add("hide")
    container.classList.remove("container")
})

closeMeniu.addEventListener("click", ()=>{
    meniu.classList.remove("hide")
    container.classList.add("container")
})

