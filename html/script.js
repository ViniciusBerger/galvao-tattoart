
let entrar = document.querySelector("#entrar")
let emailEl = document.querySelector("#email");

function validateFields(emailEl) {
    

    if(!emailEl) {
        entrar.disabled = true
    } else if (validateEmail(emailEl)) { 
        entrar.disabled = false 
    } else {
        entrar.disabled = true
    }
    }


// VERIFICAR EMAIL SE E EMAIL
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}



console.log(document.querySelector("#email"))