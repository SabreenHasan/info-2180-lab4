/***EXERCISE 1***/
var result;

window.onload = pageOpen;

function getInfo() {
	var bound;
	bound = getElementById("boundary1")
	bound.onmouseover = activateRed;
}

function activateRed() {
	bound.classList.add("youlose");
} 


/***EXERCISE 2***/
function pageOpen() {
	result = "lose";
	const begin = document.getElementById("start").onclick = onOurWay;
	const finish = document.getElementById("end");
	const theBoundaries = document.querySelectorAll(".boundary");
	
	for (let c = 0; c < theBoundaries.length; c++) {
       	theBoundaries[c].addEventListener("mouseover", letsBegin);
    }	
    betterNotCheat();
    finish.onmouseover = weAreFinished;	
}

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
	result = "lose";
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
