let username = document.querySelector("#username");
let password = document.querySelector("#password");

let usernameValidation = document.querySelector("#username-validation");
let passwordValidation = document.querySelector("#password-validation");

password.style.display = "none";

username.addEventListener("change", () => {
    if (!username.value.trim()) {
        usernameValidation.textContent = "I don't know you blankspace";

    } else if (username.value.toLowerCase().trim() === "admin") {
        usernameValidation.textContent = "PASSWORD (f)";
        password.style.display = "block";
        username.readOnly = true;

        password.addEventListener("change", () => {
            if (!password.value.trim()) {
                passwordValidation.textContent = "I told you to enter password";
            } else if (password.value === "f") {
                password.readOnly = true;
                passwordValidation.textContent = "Hello, master";
            } else {
                passwordValidation.textContent = "Wrong password";
            }
        })

    } else {
        usernameValidation.textContent = `I don't know you, ${username.value}`;
    }
})
