
const hamppari = document.querySelector('#hamppari');
const navlinks = document.querySelector('.navlinks')


hamppari.addEventListener('click', () => {
    hamppari.classList.toggle('avaa')
    navlinks.classList.toggle('aukea')
})

anime ({
    targets: '.omanimi',
    translateY:-300,
    
    duration: 1500 
})