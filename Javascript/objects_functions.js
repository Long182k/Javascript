// // // // Object creation

// // // var company = new Object();
// // // company.name= "Facebook";
// // // company.ceo= new Object();
// // // company.ceo.firstName="Mark";
// // // company.ceo.favColor="blueeeeeeeee";



// // // console.log(company);
// // // console.log("Company CEO name is : " + 
// // // 	company.ceo.firstName);
// // // console.log("Company CEO name is : " + 
// // // 	company.ceo.favColor);

// // // console.log(company["name"]);
// // // var stockProName="stock of company";
// // // company[stockProName]= 110;

// // // console.log("Stock price is :"+ company[stockProName]);


// // // // Better way : Object literal 
// // // var facebook= {
// // // 	name: "Facbook",
// // // 	ceo: {
// // // 		firstName:"Long",
// // // 		favColor:"black"
// // // 	}, 
// // // "stock of company": 110
// // // };

// // // var company= {}

// // // 	console.log(facebook);

// // // // Function are First-Class Data Types
// // // // Function ARE objects

// // // function multiply(x,y) {
// // // 	return x*y;
// // // } 
// // // console.log("The answer is " + multiply(5,3));

// // // multiply.version="v.1.0.0";
// // // console.log(multiply.version);

// // // //Function factory
// // // function makeMultiplier(multiplier) {
// // // 	var myFunc = function (x) {
// // // 		return multiplier *x;
// // // };
// // // return myFunc;

// // // }

// // // var multiplyBy3 = makeMultiplier(3);
// // // console.log(multiplyBy3(1));
// // // var doubleAll = makeMultiplier(2);
// // // console.log(doubleAll(100));	


// // // // Passing function as arguents

// // // function doOperationOn(x, operation) {
// // // 	return operation(x);
// // // } 

// // // var result = doOperationOn(5, multiplyBy3);
// // // console.log(result);
// // // result = doOperationOn(100, doubleAll);
// // // console.log(result);




// // // // *Passing Variables by Value 
// // //  var a =7;
// // //  var b=a;
// // //  console.log("a:"+a);
// // //  console.log("b:"+b);

// // // b =5;
// // //  console.log("After changing b:");
// // //  console.log("a:"+a);
// // //  console.log("b:"+b);
// // // // Dont change the origional variables (a)



// //  // Passing Variables by Reference.
// //  // var a ={x:7};
// //  // var b=a;
// //  // console.log(a);
// //  // console.log(b);
// //  // b.x =5;
// //  // console.log("After b.x update:");
// //  // console.log(a);
// //  // console.log(b);
// //  // // Changing a-> 5

// // //Function passing
// // // function changePrimitive(primValue) 
// // // {
// // // 	console.log("in changePrimitive...");
// // // 	console.log("before");
// // // 	console.log(primValue);

// // // 	primValue=5;
// // // 	console.log("After:");
// // // 	console.log(primValue);
// // // }
// // // 	var value=7;
// // // 	changePrimitive(value); //primValue= value
// // // 	console.log("After changePrimitive, orig value:");
// // // 	console.log(value);


// // function changeObject (objValue) {
// // 	console.log("in changeObject...");
// // 	console.log("before:");
// // 	console.log(objValue);

// // 	objValue.x=5;
// // 	console.log("After:");
// // 	console.log(objValue);
	
// // }

// // value={x:7};
// // changeObject(value); // objValue=value
// // console.log("After ChangeObject, Ori value:");
// // console.log(value);

// // /* Summary
// // -Primitives are passed/copied by value
// // - Objects are passed/copied by reference */



// // function test() {
// // 	console.log("Hello");	
// // 	this.myName="Drake";
// // }
// // test();
// // console.log(window.myName); // OPen in Browser to see this




// Function constructors
function Circle(radius){
	this.radius=radius;

	// this.getArea=
	// function() {
	// 	return Math.PI * Math.pow(this.radius, 2);
	// };
	// //console.log(this);
}
Circle.prototype.getArea =
	function() {
		return	Math.PI * Math.pow(this.radius,2);
}

var myCircle = new Circle(10); // Creat object Circle
//console.log(myCircle.getArea());
console.log(myCircle);

// Adding .getArea to get a value of Area.
var myCircle = new Circle(10); // Creat object Circle
console.log("The Area is :"+myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);



// Object literals and "this"
var literalCircle = { //new Object ()
	radius: 10,

	getArea:function(){
		self = this;
		console.log(this);

		var increaseRadius = function(){
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius,2);
	}
};
console.log(literalCircle.getArea());
