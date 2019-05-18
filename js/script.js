let menuDiv = document.querySelector(".menu");

function toggleActive(){
    menuDiv.classList.toggle("active");
}

menuDiv.addEventListener("click", toggleActive);