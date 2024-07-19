const handleSubmit = (evt) => {
    evt.preventDefault();
    const userData = {
        login: evt.target.login.value.toLowerCase(),
        password: evt.target.password.value.toLowerCase()
    };
    window.localStorage.setItem("isSignUp", JSON.stringify(userData));

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 300);
};

document.querySelector("form").addEventListener('submit', handleSubmit);

