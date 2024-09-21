let signinBtn = document.getElementById("signinBtn")
let signupBtn = document.getElementById("signupBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")
let inputField = document.getElementById("input-field")

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}