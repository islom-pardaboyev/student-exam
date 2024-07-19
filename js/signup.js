document.querySelector("form").addEventListener('submit', evt => {
    evt.preventDefault();
    const userData = {
        login: evt.target.login.value.toLowerCase(),
        password: evt.target.password.value.toLowerCase()
    };
    window.localStorage.setItem("isSignUp", JSON.stringify(userData))

    setTimeout(() => {
        window.location.href = "./html/signIn.html"
    }, 300)
});
