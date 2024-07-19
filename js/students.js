document.getElementById("username").textContent = JSON.parse(window.localStorage.getItem("isSignUp"))?.login || "Islom";

document.getElementById("chooseImg").addEventListener("change", function(evt) {
    document.getElementById("showChoosenImg").src = URL.createObjectURL(evt.target.files[0]);
});

document.getElementById("search").addEventListener("input", function(evt) {
    const value = evt.target.value.toLowerCase().trim();
    const arr = studentsArray.filter(item => item.name.includes(value) || item.email.includes(value));
    renderStudents(arr, document.getElementById("student-body"));
});

function logOut() {
    window.localStorage.clear();
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 300);
}

function createStudent() {
    setTimeout(function() {
        window.location.href = "../html/createStudent.html";
    }, 300);
}

function sortArray() {
    studentsArray.sort((a, b) => a.name.localeCompare(b.name));
    window.localStorage.setItem('studentsList', JSON.stringify(studentsArray));
    renderStudents(studentsArray, document.getElementById("student-body"));
}

function renderStudents(arr, list) {
    list.innerHTML = "";
    arr.forEach(function(teacher) {
        const { id, imgUrl, name, email, number, enrollNumber, data } = teacher;
        const div = document.createElement("div");
        div.className = "py-[15px] pl-[13px] h-[85px] pr-[20px] text-[14px] bg-white flex items-center justify-between rounded-[8px]";
        div.innerHTML = `
        <img src=${imgUrl} width="60" height="55" class="rounded-md" alt="">
        <p class="">${name}</p>
        <p class="">${email}</p>
        <p class="">${number}</p>
        <p class="">${enrollNumber}</p>
        <p class="">${data}</p>
        <div class="flex items-center gap-[14px]">
          <img class="cursor-pointer" src="../images/more-icon.svg" onclick="moreStudent(${id})" alt="">
          <img class="cursor-pointer" src="../images/edit-icon.svg" onclick="editImg(${id})" alt="">
          <img class="cursor-pointer" src="../images/delete-icon.svg" onclick="deleteStudent(${id})" alt="">
        </div>
    `;
        list.appendChild(div);
    });
}

function editImg(id) {
    window.localStorage.setItem("editId", JSON.stringify(id));
    setTimeout(function() {
        window.location.href = "../html/edit.html";
    }, 300);
}

function moreStudent(id) {
    window.localStorage.setItem("moreId", JSON.stringify(id));
    setTimeout(function() {
        window.location.href = "../html/more.html";
    }, 300);
}

function deleteStudent(id) {
    const findIndex = studentsArray.findIndex(function(teacher) {
        return teacher.id == id;
    });
    studentsArray.splice(findIndex, 1);
    window.localStorage.setItem("studentsList", JSON.stringify(studentsArray));
    renderStudents(studentsArray, document.getElementById("student-body"));
}

const studentsArray = JSON.parse(window.localStorage.getItem("studentsList")) || [];
renderStudents(studentsArray, document.getElementById("student-body"));

