const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) =>{
    if(e.key == "Enter"){
        addTask()
    }
})


function addTask() {
    if(inputBox.value ==""){
        alert("You must write something!!!!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value ="";
    saveData()
    
}

//sauvegarder les donnée en local
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.addEventListener("click", (e) =>{
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }else if (e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
})


//prendre les fichier depuis le stockage local

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()