



const slider = document.querySelector('.slider')
const seuraava = document.querySelector('#seuraava')
const edellinen = document.querySelector("#edellinen")
const sliderinKuva = document.querySelector('#sliderinkuva')

let dia = 0

const slides = [
    'img/slide1.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg',
    'img/slide4.jpg',
    'img/slide5.png',
    'img/slide6.jpg',
    'img/slide7.jpg'
]



sliderinKuva.src = slides[dia]



seuraava.addEventListener('click', ()=> {
    
     if(dia < slides.length -1)  {
        dia++
        sliderinKuva.src = slides[dia]
        
    } else {
        dia = 0
        sliderinKuva.src = slides[dia]
    }  
})
edellinen.addEventListener('click', ()=> {
    
    if(dia > 0)  {
       dia--
       sliderinKuva.src = slides[dia]
       
   } else {
       dia = slides.length -1
       sliderinKuva.src = slides[dia]
   }  
})

