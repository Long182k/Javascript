
		var string="Hello";
		string += "World"
		console.log(string + "!");

		// console.log((5+4)/3);
		// console.log(undefined/5);
		// function test1 (a) {
		// 	console.log(a/5);
		// }
		// test1();	

		//Equality

		var x =4 , y=4 ;
		if (x==y) {
			console.log("x=4 is equal to y=4");

		}

		x="4";
		if (x==y) {
			console.log("x='4' is equal to y=4");
		}


// Strict Equality
if (x === y) {
	console.log("Strict: x='4' is equal to y=4");

} 
else{
	console.log("Strict: x='4' is NOT equal to y=4")
}



// If statement (all false)
if (false || null || undefined || "" || 0 || NaN){
	console.log("This line won't ever execute");
}
else {
	console.log("All false");
}
// If statement (all true)
if (true && "hello" && 1 && -1 && "false"){
	console.log("All true");
}





// {} Style
// Curly Brace on the same or next line ...
// Is it just a style ?


function a()
{
	return 
	{
		name : "dsa"
	};
}


function b() {

	return {
	
		name : "dsa"
	};
}


console.log(a());
console.log(b());


// For Loop 
var sum=0;
for (var i = 0; i <10; i++) {
	console.log(i);
	sum += i;
}
console.log("sum of 0 through 9 is : " + sum);


// Default values
function orderChickenWith(sideDish) {
	if (sideDish === undefined) {
		sideDish="Whatever";
	}
	console.log("Chicken with " + sideDish);
}
orderChickenWith("Noodles");
orderChickenWith();


/*		if (x == undefined) {
			console.log("x is undefined");
		}
		else {
			console.log("x has been defined");
		}
/*
		var message = "in global";
		console.log("global:message =" + message);


		var a=function(){
			var message ="inside a";
			console.log("a:message=" + message);
			b();

		function b(){
			console.log("b:message="+ message);

		}

		}


		a();
		*/