let menu= document.querySelector("#Menu-icon")
let navbar= document.querySelector(".links")
menu.onclick= () => {
    menu.classList.toggle("fa-xmark")
    navbar.classList.toggle("open")
}