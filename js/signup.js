const handleSubmit = (evt) => {
    evt.preventDefault();
    const userData = {
        login: evt.target.login.value.toLowerCase(),
        password: evt.target.password.value.toLowerCase()
    };
    window.localStorage.setItem("isSignUp", JSON.stringify(userData));
    evt.target.submitBtn.classList.remove('py-[14px]')
    evt.target.submitBtn.innerHTML = '<img width="45px" class="mx-auto" src="../images/loading.gif" alt="">'
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 500);
};

document.querySelector("form").addEventListener('submit', handleSubmit);

