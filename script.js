
function showMenu() {
let menu = document.querySelector(".menu-mobile")
if (menu.style.display == "none") {
    menu.style.display = "block"
} else {
    menu.style.display = "none"
}
}

function validateField(email) {
    const email = document.getElementById(email)
    const ValidEmail = validateEmail(email)
    
    if (!ValidEmail) {
        

    }
}



function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}