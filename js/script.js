
document.querySelector('#navbar_toggle_btn').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('show'); 
})

// Set title 
const url = document.URL; 
if(url.includes('pages/shop')) {
    document.title = "Home Page - ecommerce"; 
    console.log('home')
}