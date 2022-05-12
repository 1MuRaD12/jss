let input = document.querySelector(".selectinput");
let tbody = document.querySelector(".tbody")
let drop = document.querySelector(".drop")

let dropzona = document.querySelector(".dropZona")

drop.addEventListener('click',()=>{
    input.click();
})

input.addEventListener("change", (e) => {
    let file = Array.from(e.target.files)

    file.forEach((file) => {
        ShowImg(file)
    })
})

function ShowImg(file) {
    if (file.type != "image/jpg" && file.type != "image/png" && file.type != "image/jpeg") {
        alert("please choos current")
        return;
    }
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("loadend", () => {
        let tr = document.createElement("tr")
        tr.className = "tr"

        let td = document.createElement("td")
        td.className = "td"
        td.classList.add("tr")

        let img = document.createElement("img")
        img.src = fileReader.result;
        img.style.width = "100%"
        img.classList.add("img")
        


        tr.appendChild(img)
        tr.appendChild(td);
        tbody.appendChild(tr);
    })
}

dropzona.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("absa");

})

dropzona.addEventListener("drop", (e) => {
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files)
    files.forEach((file)=>{
        ShowImg(file)
    })
})