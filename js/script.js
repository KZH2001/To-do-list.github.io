const inputBox = document.querySelector(".inputBox");
const listBox = document.querySelector(".listBox");


function addTask(){
if (inputBox.value === ""){
    alert ("You need to fill Task!")
}else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  
}
inputBox.value = "";
storeData()

}

listBox.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData()
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        storeData()
    }
}, false);

function storeData(){
    localStorage.setItem("data", listBox.innerHTML);
}

function showData(){
    listBox.innerHTML = localStorage.getItem("data")
}
showData();
