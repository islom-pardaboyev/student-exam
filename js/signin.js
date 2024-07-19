document.querySelector("form").addEventListener('submit', evt => {
    evt.preventDefault();
    const isSignUp = JSON.parse(window.localStorage.getItem("isSignUp"));
    const loginInput = evt.target.login.value.toLowerCase();
    const passwordInput = evt.target.password.value.toLowerCase();

    if ((isSignUp && isSignUp.login === loginInput && isSignUp.password === passwordInput) || (loginInput === "islom" && passwordInput === "123")) {
        setTimeout(() => {
            window.location.href = "../html/students.html";
        }, 300);
    } else {
        alert("Incorrect login or password");
    }
});