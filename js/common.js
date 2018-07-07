
var openBtnNav = document.getElementsByClassName('hamburger-menu');
var closeBtnNav = document.getElementsByClassName('closebtn');
var daysTitle = document.getElementsByClassName('name-of-day');
var shiftsTitle = document.getElementsByClassName('title-shift');
var timesTitle = document.getElementsByClassName('time');
var fixedMenu = document.getElementsByClassName("fixed-header-small-screens")[0];
var sidenavs = document.getElementsByClassName("sidenav");

addListener(daysTitle, setPropertyDay);
addListener(shiftsTitle, setPropertyTitleShift);
addListener(timesTitle, setPropertyTimes);


function addListener(items, functionName) {
	for(let i = 0; i < items.length; i++){
		items[i].addEventListener("click", functionName.bind(this, items[i]));
	}
}

/*openBtnNav[1].addEventListener("click", openNav);
closeBtnNav[1].addEventListener("click", closeNav);*/

openBtnNav[0].addEventListener("click", openNav);
closeBtnNav[0].addEventListener("click", closeNav);
fixedMenu.getElementsByClassName("hamburger-menu")[0].addEventListener("click", openNav);

function openNav(e) {
   	sidenavs[0].style.width = "100%";
}

function closeNav(e) {
	e.preventDefault();
    sidenavs[0].style.width = "0";
}

function setPropertyDay(e) {
	if(e.style.color == "black") {
		unsetPropertyDay(e)
	} else {
		e.style.backgroundColor = "rgb(210,105,30)";
		e.style.transform = "translateY(5px)";
	    e.style.boxShadow = "0px 3px rgba(0,0,0,.9)";
	    e.style.color = "black";

	    let getShifts = e.nextElementSibling.getElementsByClassName("title-shift");

	    for(let iShifts = 0; iShifts < getShifts.length; iShifts++) {
	    	setPropertyTitleShift(getShifts[iShifts]);
	    }
	}
}

function setPropertyTitleShift(e) {
	if(e.style.color == "black") {
		unsetPropertyTitleShift(e);
	} else {
		e.style.backgroundColor = "rgb(210,105,30)";
		e.style.transform = "translateY(5px)";
	    e.style.boxShadow = "0px 3px rgba(0,0,0,.9)";
	    e.style.color = "black";


	    let getShift = e.nextElementSibling;

	    var getTimes = getShift.getElementsByTagName('p');

	    for(let iTimes = 0; iTimes < getTimes.length; iTimes++) {
	    	setPropertyTimes(getTimes[iTimes]);
	    }
	}
	
}

function setPropertyTimes(e) {
	if(e.style.color == "black") {
		unsetPropertyTimes(e);
	} else {
		e.style.backgroundColor = "rgb(210,105,30)";
		e.style.transform = "translateY(1px)";
	    e.style.boxShadow = "0px 2px rgba(0,0,0,.5)";
	    e.style.color = "black";
	}
}

function unsetPropertyDay(e) {
	e.style.backgroundColor = "#0f59d5";
	e.style.transform = "translateY(0px)";
    e.style.boxShadow = "0px 8px rgba(0,0,0,.5)";
    e.style.color = "white";

    let getShifts = e.nextElementSibling.getElementsByClassName("title-shift");

    for(let iShifts = 0; iShifts < getShifts.length; iShifts++) {
    	unsetPropertyTitleShift(getShifts[iShifts]);
    }
}

function unsetPropertyTitleShift(e) {

	e.style.backgroundColor = "#0f59d5";
	e.style.transform = "translateY(0px)";
    e.style.boxShadow = "0px 8px rgba(0,0,0,.5)";
    e.style.color = "white";

    let getShift = e.nextElementSibling;

    var getTimes = getShift.getElementsByTagName('p');

    for(let iTimes = 0; iTimes < getTimes.length; iTimes++) {
    	unsetPropertyTimes(getTimes[iTimes]);
    }
}

function unsetPropertyTimes(e) {
	e.style.backgroundColor = "rgb(65,105,225)";
	e.style.transform = "translateY(0px)";
    e.style.boxShadow = "0px 4px rgba(0,0,0,.5)";
    e.style.color = "white";
}


window.onscroll = function() {
	if(window.pageYOffset > 150) {
		fixedMenu.style.display = "flex";
/*		sidenavs[0].style.top = window.pageYOffset+"px";
*/	} else {
		fixedMenu.style.display = "none";
/*		sidenavs[0].style.top = "0px";
*/	}
}



function recognizeLocationElement(element) {
	var scrollHeight = Math.max(
	  document.body.scrollHeight, element.scrollHeight,
	  document.body.offsetHeight, element.offsetHeight,
	  document.body.clientHeight, element.clientHeight
	);

	return scrollHeight;
}