let menuEl = document.querySelector(".mobile")

function ShowMenu() {
if (menu.style.display == "none") {
    menu.style.display = "block"
} else {
    menu.style.display = "none"
}}

menuEl.addEventListener("click", showMenu())


function validateField(email) {
    const email = document.getElementById(email)
    const ValidEmail = validateEmail(email)
    
    if (!ValidEmail) {
        

    }
}



function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}