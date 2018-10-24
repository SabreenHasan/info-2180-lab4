/***EXERCISE 1***/
var result;

window.onload = function pageOpen() {
	result = "lose";
	const begin = document.getElementById("start").onclick = letsBegin;
	const finish = document.getElementById("end");
	const theBoundaries = document.querySelectorAll(".boundary");
	
	for (let c = 0; c < theBoundaries.length; c++) {
       	theBoundaries[c].addEventListener("mouseover", letsBegin);
    }	
    betterNotCheat();
    finish.onmouseover = weAreFinished;	
}

function getInfo() {
	var bound;
	bound = getElementById("boundary1")
	bound.onmouseover = activateRed;
}

function activateRed() {
	var bound;
	bound.classList.add("youlose");
}

/***EXERCISE 2***/
function letsBegin() {	
	result = "win";
	const theBoundaries = document.querySelectorAll(".boundary");
	for (let c = 0; c < theBoundaries.length; c++) {
		theBoundaries[c].classList.add("youlose");
	}
}

/***EXERCISE 3***/
function popupMessage() {
	if (result == "win") {
		alert("You lost! :(");
	}else {
		alert("You won! :)");
	}
}

/***EXERCISE 4***/
function onOurWay() {	
	result = "false";
	document.getElementById("status").innerHTML = "Move your mouse over the "S" to begin.";
	const theBoundaries = document.querySelectorAll(".boundary");
	for (let c = 0; c < theBoundaries.length; c++) {
       	theBoundaries[c].classList.remove("youlose");
    }	
}

/***EXERCISE 5***/
function weAreFinished() {
	if (result = "win") {
		document.getElementById("status").innerHTML = "Ooops you lost! Better luck next time!";
	}else {
		document.getElementById("status").innerHTML = "CoNgRaTuLaTiOnS!! :p You WON!!";
	}
}

/***EXERCISE 6***/
function betterNotCheat() {
	var game = document.getElementById("maze");
	game.onmouseleave = letsBegin;
}
