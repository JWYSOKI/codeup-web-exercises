"use strict";

//PreWork While Loops

//Examples 1 & 2 of While Loops

var i = 0;
while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

var i = 10;
while (i < 10) {
    console.log('while loop iteration#' + i);
    i++;
}

// //Example of Do While Loop

var i = 2;
do {
    console.log('while loop iteration #' +i);
    i++;
} while (i < 10);


// In general, we will use 'for' loops when we know ahead of time how many times the loop needs to run, and 'while' or 'do-while' loops when we cannot know how many times the loop needs to run.

// *********** MODULE EXERCISES ************* //

// 'WHILE' LOOP EXERCISES

// 2. Create a while loop that uses console.log() to create the output shown below.

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


//A while loop prints something at least once, these arent the way to go because it doesn't print the number you want to start with

var res = 1;
while (res < 65536) {
    res = res * 2;
    console.log(res);
}


//This is Chris' example of a for loop (which checks the conditional before printing variable, "FOR:" LOOPS ARE THE WAY TO GO! (less code)

for (var i =0; i<0; i++){
    console.log(i)
}

//******* This is the end of Exercise 2 WHILE LOOPS ********//

// 3. An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.


// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones);

function iceCream() {

    do {
      //do here means to sell

// This is how you get a random number between 1 and 5
var conesToSell = Math.floor(Math.random() * 5) + 1;
console.log(conesToSell);

allCones = (allCones - conesToSell);
    console.log(allCones);

    } while (allCones >= 0);

}
iceCream();

// **** THIS IS FER'S SOLUTION for Exercise 3 WHILE LOOPS **** //

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

//******** This is the end of WHILE LOOP Exercises *********//

//******* This is the beginning of

// 'FOR LOOP' EXERCISES

// 1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// For example, showMultiplicationTable(7) should output


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

function showMultiplicationTable() {

}

console.log('7 x 1 = 7');
console.log('7 x 2 = 14');

var input = prompt('Give me a number');


// What's the input
// What's the output
// WHen do I start & when do I stop?

for(var i = 1; i <= 10; i+=1){
   console.log(input+' x '+ i +' = ' + (input * i) );

}

'use strict';

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}

// ========= Exercise 3
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// In this problem, Justin started with console logs, then set a variable to 'message' and used if/ese statements instead //

for (var i = 0; i <= 9; i +=1) {
    var randomNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    // console.log(randomNum);

    var message;


    if (randomNum % 2 == 0) {
        // console.log(randomNum + " is even");
        message = randomNum + " is even" ;

    } else {
        // console.log(randomNum + " is odd");
        message = randomNum + " is odd" ;
    }
}

// ========== Exercise 4

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (var i = 1; i<=9; i += 1 ) {
    console.log(i);

    var output = "";
    for (var j = 1; j <= i; j += 1) {
       output += i;
       console.log(output);
    }
}


// Justin's 2nd solution (shorter) and you can't always believe what IntelliJ tells you

for (var i = 1; i<=9; i += 1 )
    var output = i + "";
    console.log(output.repeat(i));
}


// ========== Exercise 5

// Create a for loop that uses console.log to create the output shown below.

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (var x = 100; x > 0; x = x - 5) {
    console.log(x);
}

// This is the easiest problem, so the best to practice if LOOPS are challenging //
