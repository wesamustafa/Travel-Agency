// header section start
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.toggle("active");
}
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.toggle("active");
}
let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    loginForm.classList.toggle("active");
}
window.onscroll = () => {
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
}
let themeBtn = document.querySelector("#theme-btn");
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add("active");
    } else {
        document.body.classList.remove("active");
    }
}
// header section end