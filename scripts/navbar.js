const hamppari = document.querySelector('#hamppari');
const navlinks = document.querySelector('.navlinks');

const suljeNav = () => {
    if(window.innerWidth >= 800) {
        navlinks.classList.remove('aukea')
        hamppari.classList.remove('avaa')
    }
      
}

  

window.addEventListener('resize', suljeNav)

hamppari.addEventListener('click', () => {
    hamppari.classList.toggle('avaa')
    navlinks.classList.toggle('aukea')
})
suljeNav()

