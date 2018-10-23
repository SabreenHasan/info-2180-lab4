window.onload = function pageOpen() {
	var result = "lose";
	document.getElementById("start").onclick = letsBegin;
	/document.getElementById("end").onmouseover = weAreFinished;/
}

function getInfo() {
	var bound;
	bound = getElementById("boundary1")
	bound.onmouseover = extra;
}

function extra() {
	var bounds;
	bound.classList.add("youlose");
}

/function onOurWay() {	
	const theBoundaries = document.querySelectorAll("boundary");
	for (let c = 0; c < theBoundaries.length; c++) {
		theBoundaries[c].classList.add("youlose");
		alert("got to this point");
	}
}/

function letsBegin() {	
	const theBoundaries = document.querySelectorAll("boundary");
	for (let c = 0; c < theBoundaries.length; c++) {
       	theBoundaries[c].addEventListener("onmouseover", onOurWay);
    	alert("progress");
    }	
}

/*function weAreFinished() {
	var array = [3, 5, 7];
	if (array.length > 0) {
		hoverOver();
		alert("Ooops you lost! Better luck next time!");
	}else {
		noHover();
		alert("CoNgRaTuLaTiOnS!! :p You WON!!");
	}
}

function restart() {
	var ans = confirm("Would you like to play again?")
	if (ans == true) {
		alert("We got this far")
		ans.onclick = pageOpen
	}else {
		alert("Thanks for playing :)")
	}
}
*/