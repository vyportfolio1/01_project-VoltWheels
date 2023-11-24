
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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const heartIcons = document.querySelectorAll('.fa-heart');

 
heartIcons.forEach((heartIcon, index) => {
    heartIcon.addEventListener('click', function() {
        heartIcon.classList.toggle('fa-solid');
        heartIcon.classList.toggle('fa-regular');
    });
});
