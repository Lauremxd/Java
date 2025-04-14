function validate() {
    let name = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("nameError");
    let passwordError = document.getElementById("passwordError");

    let isValid = true;

    nameError.textContent = "";
    passwordError.textContent = "";

   const correctName = "Laurem";
    const correctPassword = "986264";

    {
    }
    if (name === "") {
        nameError.textContent = "Naam likhna zaroori hai.";
        isValid = false;
    } else if (name !== correctName) {
        nameError.textContent = "username galat hai bhai.";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password likhna zaroori hai.";
        isValid = false;
    } else if (password !== correctPassword) {
        passwordError.textContent = "Password bhi galat hai.";
        isValid = false;
    }

    if (isValid) {
        alert("Login pura hogaya!!");
        document.getElementById("loginForm").reset();
    }

    return false;
}

function togglePassword() {
    let passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
