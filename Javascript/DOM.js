// // DOM manipulation
// console.log(document.getElementByID("title"));

// console.log(document instanceof HTMLDocument);

// Event handling 
function sayHello(event) {
	console.log(this)
	var name =
	document.getElementByID("name").value;
	var message = "<h2>Hello" + name + "!</h2>";

	document
	.getElementByID("content")
	.innerHTML = message;

	if (name=="student") {
		var title=
			document
				.querySelector("#title")
				.textContent;
		title += "$Lovin' it!";
			document
				.querySelector("h1")
				.textContent = title;
	}
}
	
