// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var directory = "";

document.querySelector(".directory_selection").addEventListener("input", (e) => {
	directory = e.target.value;
	document.querySelector(".dir").innerHTML = "<i>Selected: " + directory + '</i>';
})