document.getElementById("chooseImg").addEventListener("change", function(evt) {
    const file = evt.target.files[0];
    document.querySelector("#showChooseImg").src = URL.createObjectURL(file)
});

function logOut() {
    window.localStorage.clear()
    setTimeout(() => {
        window.location.href = "../index.html"
    }, 300)
}


let studentsArray = JSON.parse(window.localStorage.getItem("studentsList")) || []

document.querySelector("form").addEventListener('submit', evt => {
    evt.preventDefault()
    const studentData = {
        id: Date.now(),
        name: evt.target.name.value,
        email: evt.target.email.value,
        number: evt.target.number.value,
        enrollNumber: evt.target.enrollNumber.value,
        data: evt.target.data.value,
        imgUrl: document.querySelector("#showChooseImg").src
    } 

    studentsArray.push(studentData)
    window.localStorage.setItem("studentsList", JSON.stringify(studentsArray))
    console.log(studentData);

    setTimeout(() => {
        window.location.href = "../html/school.html"
    })
})