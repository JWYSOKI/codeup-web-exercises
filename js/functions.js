"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


        // function sayHello(name) {
        //     return "Hello " + name + "!";
        // }
        // console.log(sayHello("Jillian"));



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

        // sayHello("Jillian");
        // var helloMessage = sayHello("Jillian");
        // console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

        // var myName = "Jillian";
        // console.log(sayHello(myName));
        //
        //
        // // Don't modify the following line, it generates a random number between 1 and 3
        // // and stores it in a variable named random
        // var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */


        // function isTwo(number){
        //     // console.log("rnd", number);
        //     return 2 === number;
        // }
        //
        // isTwo(random)
        // console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
        // function calculateTip(tipPercentage, billTotal) {
        //     var tipInValue = tipPercentage / 100 ; // 0.2
        //     return billTotal * tipInValue;
        // }
        //
        // console.log(calculateTip(20, 100));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

        // console.log(calculateTip(prompt("Give me the tip %"), prompt("give me the bill total")));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

        // function applyDiscount(originalPrice, discountPercent){
        //    var discount = discountPercent / 100; // .12
        //     var discountVal = originalPrice * discount;
        //    return originalPrice - discountVal;
        // }
        //
        // console.log(applyDiscount(100,12));
        // console.log(applyDiscount(45.99, 12));


// ================ SIMPLE FUNCTION DRILLS


    // 1) Make a function called returnTwo() that returns the number 2 when called
    // ---Test this function with console.log(returnTwo())

    function returnTwo() {
        return (2);
    }
        console.log(returnTwo());


    // 2) Make a function called returnName() that returns the string of your name
    // ---Test this function with console.log(returnName())


    function returnName() {
        return ("Silly Jilly");
    }

    console.log(returnName());


    // 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
    // ---Test this function with console.log(addThree(5))

    function addThree(anything) {
        return (anything + 3);
    }
        console.log(addThree(5));

    // 4) Make a function called sayString() which returns the string input passed in.
    // ---Test this function with console.log(sayString())

    function sayString(anythingiwant) {
        console.log("this is my input:\n", anythingiwant);
        //This is AWESOME!
        return (anythingiwant);
    }

    console.log(sayString("Hello_World"));

    // 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
    // ---Test this function by directly calling sayHowdy()
    // ---Remember this function does not need a defined return value

    function sayHowdy() {
            console.log("Howdy!");
    }

    sayHowdy();

    function sayHowddy() {
        return ("Howdy!!!");
    }
    sayHowddy();
    console.log(sayHowddy());

    // ================ CHALLENGE FUNCTION DRILLS

    // Write a function called `identity(input)` that takes in an argument called input and returns that input.

    function identity(input) {
        return (input);
    }

    console.log(identity());

    // Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

    function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1));
    return randomNumber;
    }

    console.log(getRandomNumber(1,41));


    // Write a function called `first(input)` that returns the first character in the provided string.

    // function first(input) {
    //
    //     return input.charAt(0);
    //
    // }

// console.log(first("string"));

// Write a function called `last(input)` that returns the last character of a string

    function last(input) {
        return input.charAt(input.length-1);
    }
console.log(last("string"));


// Write a function called `rest(input)` that returns everything but the first character of a string.

function rest(input) {


}


    // Write a function called `reverse(input)` that takes a string and returns it reversed.




    // Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

    // function isNumeric(input) {
    //
    // if (input > 10) {
    //     return false;
    // } else {
    //     return true;
    // }
    // }
    // console.
    // c(10));

    // Write a function called `count(input)` that takes in a string and returns the number of characters.

    function count(input) {

    // only looking for blondes

    if (input == toString) {
      return ("").length;
        }
    }

    console.log(count('what'));


    // Write a function called `add(a, b)` that returns the sum of a and b
    function add(a, b) {
        var sum = a + b;
        return sum;
    }

    console.log(add(9, 12));

    // Write a function called `subtract(a, b)` that return the difference between the two inputs.

    // Write `multiply(a, b)` function that returns the product
    //
    //
    // Write a divide(numerator, denominator) function that returns a divided by b
    //
    //
    //
    // Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`




    // Write the function `square(a)` that takes in a number and returns the number multiplied by itself.


    // # Super Duper Gold-Star Bonus
    // Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators


    // Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

    function doMath(operator, a, b) {

}




