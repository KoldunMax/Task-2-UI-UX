
var openBtnNav = document.getElementsByClassName('hamburger-menu')[0];
var closeBtnNav = document.getElementsByClassName('closebtn')[0];
var shiftsTitle = document.getElementsByClassName('title-shift');


for(let i = 0; i < shiftsTitle.length; i++){
	console.log(shiftsTitle[i]);
	shiftsTitle[i].addEventListener("click", setPropertyTitleShift);
}

openBtnNav.addEventListener("click", openNav);
closeBtnNav.addEventListener("click", closeNav);

function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "100%";
}

function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "0";
}

function setPropertyTitleShift(e) {
	console.log(i);
	e.style.backgroundColor = "rgb(255,140,0)";
	e.style.transform = "translateY(5px)";
    e.style.boxShadow = "0px 3px rgba(0,0,0,.9)";
    e.style.color = "black";
}