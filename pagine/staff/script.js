function g() {
    document.getElementById("n").innerHTML = "Modalità giorno";
    document.getElementById("style").href = "style-dark.css";
	document.getElementById("g").style = "display: none !important;";
	document.getElementById("n").style = "display: block !important;";
	document.getElementById("g").innerHTML = ""
}

function n() {
    document.getElementById("g").innerHTML = "Modalità notte";
    document.getElementById("style").href = "style.css";
	document.getElementById("n").style = "display: none !important;";
	document.getElementById("g").style = "display: block !important;";
	document.getElementById("n").innerHTML = ""
}