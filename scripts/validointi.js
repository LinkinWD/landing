const submit = document.getElementById('submit');
const wholeName = document.getElementById('name');
const email = document.getElementById('email');


wholeName.addEventListener('keyup', () => {
    const nimiLabel = document.querySelector('#nimilabel')
    if(wholeName.value != '') {
        nimiLabel.textContent = ''
    } else if (wholeName.value == "") {
        nimiLabel.textContent = "Etu ja sukunimi"
    }
})

email.addEventListener('keyup', () => {
    const emailLabel = document.querySelector('#emaillabel')
    if(email.value != '') {
        emailLabel.textContent = ''
    } else if (email.value == "") {
        emailLabel.textContent = "Sähköposti"
    }
})


function validateNimi(){
    const regName = /^[a-öA-Ö]+ [a-öA-Ö]+$/;
    const nimiVaroitus = document.querySelector('#nimivaroitus')
    if(!regName.test(wholeName.value)){
        nimiVaroitus.textContent =('Laittaisitko kokonimesi? (etu- ja sukunimi).');
        document.getElementById('name').focus();
        return false;
    } else {
        nimiVaroitus.textContent = '';
        return true
    }
}

function ValidateEmail() {
    const emailVaroitus = document.querySelector('#emailvaroitus') 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        
        emailVaroitus.textContent = '';
        return (true)
    }
        emailVaroitus.textContent = ("Laita oikea sähköposti osoite!")
        return (false)
}

submit.addEventListener('click', (e) => {
    /* e.preventDefault() */
    validateNimi()
    ValidateEmail()
})
