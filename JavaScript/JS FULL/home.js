console.log('Hello');

// alert('Hello, Its Jahid Hasan');

// VARIABLES
var b = 'Smoothe';
console.log(b);

var someNumber = 45;
//console.log(someNumber);


// Change the code into html page, add JS code into it
// document.getElementById('someText').innerHTML = 'Hey There';

// Ask user for any info or store it, so when type the age it will appear in the page 
//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;


// Numbers in JS
var num1 = 10;
//console.log(5*10);
//num1 = num1 + 10; // increment number
// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %

console.log(num1 % 6);

// Incre/Decre by any no you want/ for eg its 10
num1 += 10;
console.log(num1)


/* Functions 
1. Create a fn
2. Call the function 
*/ 
/*
//create
function fun() {
	alert('This is a function');
}
// call
fun();
*/
/* Create a fn takes in a name
and says hello followed by your name
For eg- store this var call name
Name: "Jahid"
Return: "Hello Jahid"
*/

function greeting(yourName) {
	//var name = prompt('What is your name?');
	var result = 'Hello' + ' ' + yourName; // add a space; called srtring concatenation
	console.log(result);
}
//var name = prompt('What is your name?');
//greeting(name);

// How do arguments work in fn?
// How do we add 2 numbers together in a fn, 2 input num1 and num2 (10,10)
function sumNumbers(num1, num2) {
	var result = num1 + num2;
	console.log(result);
}
//sumNumbers(10, 10);
//sumNumbers('Hello', ' Jahid');

// Loops WHile and FOr
/* While loops
var num = 0;
while (num < 100) {
	num += 1;
	console.log(num);
}
*/ 
// For loops
/*
for (let num = 0; num <= 100; num++) {
	console.log(num);
}
*/
// DIFFERENT DATA TYPES
let yourAge = 20; // Number
let yourName = 'JAHID' // string
let name = {first: 'Jahid', last: 'Hasan'}; // Object
let truth = false; // boolean
let groceries = ['Apples', 'Potatoes','Banana']; // array
let random; // undefined
let nothing = null; // value null


// STRING IN JS common methods
let fruit = 'Banana, Apple, Orange';
let moreFruits = 'Banana\napple'; // \n new line
//console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan')); // index use to find the word can found or not
console.log(fruit.slice(2, 6));  // slice from a range, 0~....
console.log(fruit.replace('Ban', '123')); // Replace word or number
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('')); // split by char
console.log(fruit.split(',')); // split by a comma it will list of item if item is long


// Arrays
let fruits = ['Banana', 'Apple', 'Orange', 'Pineapples'];
fruits = new Array('Banana', 'Apple', 'Orange', 'Pineapples');
// alert(fruits[2]);
console.log(fruits[2]) // access value at index 2nd
fruits[0] ='Pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// Array common methods, multiple arg
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));

// console.log(fruits, fruits.pop(), fruits);
console.log(fruits.pop(), fruits); // remove last item

console.log(fruits.push('Blackberries'), fruits); // appends
console.log(fruits[4]);
// fruits[4] = 'new fruit';
fruits[fruits.length] = 'new fruit' // same as push
console.log(fruits); 
fruits.shift(); // remove first element from an array
fruits.unshift('Kiwi');
console.log(fruits);
// add more fruits in the list array
let vegetables = ['asparagus', 'tomato','broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4)); // Slicing
console.log(allGroceries.reverse());
console.log(allGroceries.sort());
// sorting asc and desc
let someNumbers = [5, 10, 3, 5, 455, 2, 7, 9, 34];
console.log(someNumbers.sort(function(a, b) {return a-b}));
console.log(someNumbers.sort(function(a, b) {return b-a}));

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
	emptyArray.push(num);
}
console.log(emptyArray);


// Objects in JS
// Dictionaried in pyhton
let student = {
	first: 'Jahid', 
	last: 'Hasan', 
	age:25, 
	height:178,
	studentInfo: function(){
		return this.first + '\n' + this.last +  '\n' + this.age;
	}
};
//console.log(student.first);
//console.log(student.last);
//student.first='notJahid'; // change value
//console.log(student.first);
//student.age++; //increment
//console.log(student.age);
console.log(student.studentInfo());

// If else conditional statement, control flows if else
// 18-35 is my target demographic

//var age = prompt('What is your age?');
var age = 45;  // this line use for the switch statement
if ((age >= 18) && (age <= 35)) {
	status = 'target demo';
	console.log(status);
} else {
	status = 'not my audience';
	console.log(status);
}


// Switch statements
// if every day was a week day
// differentiate between weekday vs weekend
/*
Day 0 Sunday; Day 1 Monday; Day 2 Tuesday; Day 3 Wendesday
Day 4 Thursday; Day 5 Friday; Day 6 Saturday
*/
switch (3) {
	case 0:
	     text = 'weekend';
	     break;
	case 5:
	     text = 'weekend';
	     break;
	case 6:
	     text = 'weekend';
	     break;
	default:
	      text = 'weekday';
}
console.log(text);
































































