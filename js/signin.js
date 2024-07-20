document.querySelector("form").addEventListener('submit', evt => {
    evt.preventDefault();
    const isSignUp = JSON.parse(window.localStorage.getItem("isSignUp"));
    const loginInput = evt.target.login.value.toLowerCase();
    const passwordInput = evt.target.password.value.toLowerCase();

    if ((isSignUp && isSignUp.login === loginInput && isSignUp.password === passwordInput) || (loginInput === "islom" && passwordInput === "123")) {
evt.target.submitBtn.classList.remove('py-[14px]')
        evt.target.submitBtn.innerHTML = '<img width="45px" class="mx-auto" src="../images/loading.gif" alt="">'
        setTimeout(() => {
            window.location.href = "../html/students.html";
        }, 500);
    } else {
        alert("Incorrect login or password");
    }
});