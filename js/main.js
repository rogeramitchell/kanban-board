var dragged;
var draggedContents;
var droppedContents;

document.addEventListener("drag", function(event) {
}, false);

document.addEventListener("dragstart", function(event) {
	dragged = event.target;
	draggedContents = event.target.innerHTML;
	event.target.style.opacity = 0.5;
});

document.addEventListener("dragend", function(event) {
	event.target.style.opacity = "";
	event.target.style.background = "";
});

document.addEventListener("dragover", function(event) {
	event.preventDefault();
});

document.addEventListener("dragenter", function(event) {
	if(event.target.classList.contains("slds-card")) {
		event.target.classList.add("drop-zone");
	}
});

document.addEventListener("dragleave", function(event) {
	if(event.target.classList.contains("slds-card")) {
		event.target.classList.remove("drop-zone");
	}
});

document.addEventListener("drop", function(event) {
	event.preventDefault();
	if(event.target.classList.contains("slds-card")) {
		event.target.classList.remove("drop-zone");
		droppedContents = event.target.innerHTML;
		dragged.innerHTML = droppedContents;
		event.target.innerHTML = draggedContents;
	}
});