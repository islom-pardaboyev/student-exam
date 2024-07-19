function logOut() {
    window.localStorage.clear()
    setTimeout(() => {
        window.location.href = "../index.html"
    }, 300)
}

let studentsList = JSON.parse(window.localStorage.getItem("studentsList")) || [];
let moreId = JSON.parse(window.localStorage.getItem("moreId"))

const moreStudent = studentsList.find(student => student.id == moreId)

if (moreStudent) {
    document.querySelector("#moreCon").innerHTML = `
    <h1 id="userName" class="font-bold capitalize w-full border-b border-black pb-[20px]">${moreStudent.name}</h1>
    <div class="bg-white w-[592px] h-[391px] p-6 rounded-[8px] mt-[41px] flex items-start gap-[40px]">
        <img src=${moreStudent.imgUrl} width="219" height="216" alt="">
        <div class="flex flex-col gap-[15px]">
            <label class="flex flex-col">
                <span class="leading-[14.63px] text-[#ACACAC] text-[12px] font-semibold">Name</span>
                <p class="capitalize">${moreStudent.name}</p>
            </label>
            <label class="flex flex-col">
                <span class="leading-[14.63px] text-[#ACACAC] text-[12px] font-semibold">Email</span>
                <p>${moreStudent.email}</p>
            </label>
            <label class="flex flex-col">
                <span class="leading-[14.63px] text-[#ACACAC] text-[12px] font-semibold">Phone</span>
                <p>${moreStudent.number}</p>
            </label>
            <label class="flex flex-col">
                <span class="leading-[14.63px] text-[#ACACAC] text-[12px] font-semibold">Date admission</span>
                <p>${moreStudent.data}</p>
            </label>
        </div>
    </div>
    `
}

