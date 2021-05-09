// // ARRAYS
// var array= new Array();
// array[0] = " Drake0";
// array[1] = 2;
// array[2] = function(name) {
// 	console.log("Hello" +"              " + name);
// };
// array[3] = {course:"HTML,CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);



// SHORT HAND ARRAY CREATION
// var names= [
// "Drake","John" ,"Joe"];
// //console.log(names);

// for (var i=0; i<names.length; i++) {
// 	console.log("Hello" +" " + names[i]);
// }

// names[100] ="Yasuo";
// for (var i=0; i<names.length; i++) {
// 	console.log("Hello" +" " + names[i]);
// }


// var names2= ["Drake","John" ,"Joe"];

// var myObj= {
// 	name: "Yaakov",
// 	course:"HTML/CSS/JSS",
// 	platform:"Courera"
// };
// for (var prop in myObj ) {
// 	console.log(prop + ":" +myObj[prop]);
// }
// for(var name in names2) {
// 	console.log("Hello" +" "+names2[name]);
// }

// names2.greeting = "Hi!";
// for(var name in names2) {
// 	console.log("Hello" +" "+names2[name]);
// }

// Closures
function makeMultiplier(multilplier) {
	// var multiplier = 2 ;

	function b() {
		console.log("Multiplier is " + multilplier);
	}
	b();


	return (
		function (x) {
			return multilplier * x;
		}
	
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));



























