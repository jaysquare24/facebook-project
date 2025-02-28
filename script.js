//DOM ELEMENTS
let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");
//EVENT HANDLER
let hideAndShowPasswordHandler = () => {

 if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "./resources/icons8-show-password-30.png"
 } 
 else{
    password.type = "password";
    eyeIcon.src = "./resources/icons8-hide-password-30.png"

 }

}
// EVENT LISTENER
eyeIcon.addEventListener('click', hideAndShowPasswordHandler);
