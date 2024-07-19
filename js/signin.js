const isSignUp = JSON.parse(window.localStorage.getItem("isSignUp"))

document.querySelector("form").addEventListener('submit', evt => {
    evt.preventDefault()
    
    if(isSignUp.login === evt.target.login.value.toLowerCase() && isSignUp.password === evt.target.password.value.toLowerCase()){
        setTimeout(() => {
            window.location.href = "../html/school.html"
        }, 300);
    }else{
        alert("Incorrect login or password")
    }
})