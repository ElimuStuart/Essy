let menuDiv = document.querySelector(".menu");
let overlayDiv = document.querySelector(".overlay");
let navLinks = document.querySelectorAll(".nav a");

function toggleActive(){
    menuDiv.classList.toggle("active");
    overlayDiv.classList.toggle("menu-open");
}

function removeActive(){
    overlayDiv.classList.remove("menu-open");
    menuDiv.classList.remove("active");
}

menuDiv.addEventListener("click", toggleActive);

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", removeActive);
}