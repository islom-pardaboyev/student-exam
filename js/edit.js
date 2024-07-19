function logOut() {
    window.localStorage.clear()
    setTimeout(() => {
        window.location.href = "../index.html"
    }, 300)
}

let list = JSON.parse(window.localStorage.getItem("studentsList"))
let id = JSON.parse(window.localStorage.getItem('editId'))

const editStudent = list.find(student => student.id == id)

document.querySelector("#name").value = editStudent.name
document.querySelector("#email").value = editStudent.email
document.querySelector("#phone").value = editStudent.number
document.querySelector("#encroll").value = editStudent.enrollNumber
document.querySelector("#data").value = editStudent.data
document.querySelector("#showChooseImg").src = editStudent.imgUrl

document.querySelector("form").addEventListener('submit', (evt) => {
    evt.preventDefault()

    editStudent.name = document.querySelector("#name").value
    editStudent.email = document.querySelector("#email").value
    editStudent.number = document.querySelector("#phone").value
    editStudent.enrollNumber = document.querySelector("#encroll").value
    editStudent.data = document.querySelector("#data").value
    editStudent.imgUrl = document.querySelector("#showChooseImg").src

    window.localStorage.setItem("studentsList", JSON.stringify(list))

    setTimeout(() => {
        window.location.href = "../html/school.html"
    }, 300)
})