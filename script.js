function register() {

    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    let passwordPattern =
        /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password)) {
        document.getElementById("message").innerText =
            "Password must be 8+ characters, contain 1 uppercase letter and 1 number.";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("message").innerText =
        "Registration Successful!";
}

function login() {

    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (username === storedUser &&
        password === storedPass) {

        document.getElementById("message").innerText =
            "Login Successful!";
    }
    else {

        document.getElementById("message").innerText =
            "Invalid Username or Password!";
    }
}
