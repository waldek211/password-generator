document.addEventListener("DOMContentLoaded", function() {
    var passwordInput = document.getElementById("password");
    passwordInput.addEventListener("input", checkPasswordStrength);
});

function checkPasswordStrength() {
    var password = this.value;
    var sila = document.getElementById("strength-badge");
    var napis = document.getElementById("strength-text");
    
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    
    if (strongRegex.test(password)) {
        sila.className = "strong";
        napis.innerHTML = "Silne";
    } else if (mediumRegex.test(password)) {
        sila.className = "medium";
        napis.innerHTML = "Średnie";
    } else {
        sila.className = "weak";
        napis.innerHTML = "Słabe";
    }
}