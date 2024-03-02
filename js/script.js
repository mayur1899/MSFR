let hamburger = document.querySelector("#hamburger")
let nav_container = document.querySelector(".nav-con-ul")

hamburger.addEventListener("click", ()=>{
    if (nav_container.style.top == '') {
        nav_container.style.top = '120%'
    } else {
        nav_container.style.top = ''
    }
})