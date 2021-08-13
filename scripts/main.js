
const hamppari = document.querySelector('#hamppari');
const navlinks = document.querySelector('.navlinks');
const slider = document.querySelector('.slider')

const slides = [
    'img/slide1.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg',
    'img/slide4.jpg'
]

hamppari.addEventListener('click', () => {
    hamppari.classList.toggle('avaa')
    navlinks.classList.toggle('aukea')
})

anime ({
    targets: '.omanimi',
    translateY:-60,
    
    duration: 1500 
})