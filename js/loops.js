"use strict";

//PreWork While Loops

//Examples 1 & 2 of While Loops

// var i = 0;
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//
// var i = 10;
// while (i < 10) {
//     console.log('while loop iteration#' + i);
//     i++;
// }

//Example of Do While Loop

var i = 2;
do {
    console.log('while loop iteration #' +i);
    i++;
} while (i < 10);

// // MODULE EXERCISES - Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// 2.
var res = 1;
while (res < 65536) {
    res = res * 2;
    console.log(res);
}



// 3.
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// console.log(allCones);
//
// function iceCream() {
//
//     do {
//       //do here means to sell
//
// // This is how you get a random number between 1 and 5
// var conesToSell = Math.floor(Math.random() * 5) + 1;
// console.log(conesToSell);
//
// allCones = (allCones - conesToSell);
//     console.log(allCones);
//
//     } while (allCones >= 0);
//
// }
// iceCream();

// **** THIS IS FER'S SOLUTION **** //

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log('Start of the day I have' + allCones + 'left');
    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if(conesToSell <= allCones) {
        console.log("I sold " + conesToSell);
        allCones = allCones - conesToSell;
    }else if (allCones === 0) {
        console.log('I can go home');

    }else {
        console.log('I don\'t have ' +conesToSell+ 'enough cones to sell');
    }


} while (allCones !== 0);

// For Loops
//
// Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
//     Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
//
// console.log('7 x 1 = 7');
// console.log('7 x 2 = 14');

var input = prompt('Give me a number');

// What's the input
// What's the output
// WHen do I start & when do I stop?

for(var i = 1; i <= 10; i+=1){
   console.log(input+' x '+ i +' = ' + (input * i) );

}