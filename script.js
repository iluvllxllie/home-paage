var navbar=document.querySelector(".navBar")
var menu=document.querySelector("#menu")

//I want to add an onclick function to make the menu work
menu.onclick=()=>{
    navbar.classList.add("active")
}

//I want to add onclick function to make close work
var close=document.querySelector("#close")
close.onclick=()=>{
    navbar.classList.remove("active")
}