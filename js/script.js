// Navbar hide and show
const navbar = document.querySelector('.navbar'); 
document.querySelector('#navbar_toggle_btn').addEventListener('click', () => {
    navbar.classList.add('show'); 
})

document.querySelector('#close_navbar_btn').addEventListener('click', () => {
    navbar.classList.remove('show'); 
})



// Set title 
const url = document.URL; 
if(url.includes('pages/shop')) {
    document.title = "Shop - ecommerce"; 
}


// get screen width 
// 1: 
let mob_view = window.matchMedia("(max-width: 500px)"); 
// 2: 
let width = window.innerWidth; 

window.addEventListener('resize', () => {
    // if(mob_view.matches) {
        window.innerWidth
    // }
    if(window.innerWidth <= 500){
        console.log(window.innerWidth)
    }
})










// Single product image slider
const mainImage = document.getElementById("main-image"); 
const smallImage = document.getElementsByClassName("small-image"); 
console.log(smallImage)

Array.from(smallImage).forEach(el => {
    el.addEventListener('click', () => {
        let imgSrc = el.getAttribute('src')
        mainImage.setAttribute('src', imgSrc)
    })
});

















