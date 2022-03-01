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


