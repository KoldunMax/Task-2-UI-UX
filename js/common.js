
var openBtnNav = document.getElementsByClassName('hamburger-menu')[0];
var closeBtnNav = document.getElementsByClassName('closebtn')[0];

openBtnNav.addEventListener("click", openNav);
closeBtnNav.addEventListener("click", closeNav);

function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "100%";
}

function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "0";
}