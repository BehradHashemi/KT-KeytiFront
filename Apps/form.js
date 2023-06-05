const displayForm1 = document.querySelector(".signIn-div")
const displayForm2 = document.querySelector(".signUp-div")
// -----------------------------------------------------------------------
const showSignUp = document.querySelector(".showSignUp")
const showSignIn = document.querySelector(".showSignIn")
// -----------------------------------------------------------------------
showSignUp.addEventListener("click", displaySignUp)
showSignIn.addEventListener("click", displaySignIn)

function displaySignUp(event) {
    event.preventDefault()
    displayForm1.style.display = "none";
    displayForm2.style.display = "flex";
}
function displaySignIn(event) {
    event.preventDefault()
    displayForm2.style.display = "none";
    displayForm1.style.display = "flex";
}