"use strict";


// Daniel's lecture on ARRAYS


// ========= FIRST EXAMPLE ON WHY WE NEED ARRAYS ========== //
// var student = "Xavier";
// var student1 = "Charles";
//
// console.log(student);
// console.log(student1);
//
// An array is what is called a "data structure", which means it is a single variable that holds other variables
//
var students = ["Xavier", "Charles", "Jillian", "Vincent", "Matthew"];
//
// console.log(students);


// students.length
// NOTE: .length does not need parenthesis because it is a property, not a method


// var grades = [99, 82, 88];
// var answers = [true, true, false];
// var cities = ["San Antonio", "Austin", "Dallas"];
// var stuff = [74, "hellalump", false, [1, "something"]];

var sanAntonio = "San Antonio";
var austin = "Austin";
var dallas = "Dallas";
var houston = "Houston";
var texasCities = [sanAntonio, austin, dallas, houston];

for (var i=0; i < texasCities.length; i++) {
    console.log(texasCities[i]);
}




var batonRouge = "Baton Rouge";
var capitalCities = [austin, batonRouge];
var citiesWith2Words = [sanAntonio, batonRouge];

console.log(texasCities);
console.log(capitalCities);
console.log(citiesWith2Words);

var ourArray = [];
console.log (typeof ourArray);

console.log(students[0]);
console.log(students[students.length - 1]);

var i = 0;
while
    (i < 10) {
    console.log(i);
    i++;
}

for (
    var i = 0; i < students.length; i++){
    console.log(students[i]);
}



var name = "Daniel";
var firstInitial = name[0];
var lastLetter = name[name.length-1];

console.log(firstInitial);
console.log(lastLetter);

// I am going to be FREAKING AWESOME at naming things, organizing code, and keeping code tidy! //
//

// Things to notice that are different about arrays:
// 1) braces []
// 2) it is an ORDERED list
// 3) when you console.log it will start by giving you the number of elements in the array in ( )
// 4) arrays are 0-indexed

// *** VOCABULARY WORDS FOR ARRAYS *** //
//  iterate
//  index

// 'for' loops are more computer-style thinking and while loops are more human-style


// ======= In-Class Practice Assignment ======== //


// var practiceArray = ['String1', 'String2', 'String3', 'String4'];
//
// for (var i = 0; i < practiceArray.length; i++) {
//     console.log('The name of this string ' + i + ' is: ' + practiceArray[i]);
// }
//
// var yell = function () {
//     console.log("Hey!!!");
// }
//
// console.log(yell());
// console.log(yell);
//
//
// for (var i = 0; i < students.length; i++) {
//     greet(students[i]);
//
//     var greet = function(name) {
//         var greeting = "Hello, " +name+ "!";
//         console.log(greeting);
//     }
// }
//
// students.forEach(function(name) {
//     var greeting = "Hello, " +name+ "!";
//     console.log(greeting);
// });
//


var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// // let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

