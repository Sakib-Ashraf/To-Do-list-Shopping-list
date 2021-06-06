// @ts-nocheck
// todo list

var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.getElementsByTagName("li");
var i;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete !"));
	btn.addEventListener("click", dltListItem);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

function addItemByClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addItemAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



//// DONE TOGGLER

function toggler(event) {
	event.target.classlist.toggle("done");
}


//// DELETE BUTTON CREATE AND ADDING IT TO NEW ELEMENT

function liLength () {
	return list.length;
}

function createDltBtn () {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete !"));
	list[i].appendChild(btn);
	btn.addEventListener("click", dltListItem);
}

for (i = 0; i < liLength(); i++) {
	createDltBtn();
}

function dltListItem(event) {
	event.target.parentNode.remove();
}

ul.addEventListener("click", toggler);
enter.addEventListener("click", addItemByClick);
input.addEventListener("keypress", addItemAfterKeypress);