//
//
// (function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    //An array is a list

    var names = ["Joseph", "Glen", "David", "Michael"];
    console.log(names);


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */


    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}
   //When dealing with arrays, alwasy want to start i at 0 because the first item is always stored at 0 index
    //Arrays names are always plural, because arrays are always more than 1 thing

    //For the FOR EACH loop, the anonymous function takes a parameter that is the singular version of the array name (best practice)

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

names.forEach(function(name){
    console.log(name)
    })



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

function firstItem(array) {
        console.log((array[0]));
    }
firstItem(names)


function secondItem(array) {
    console.log((array[1]));
    }
    secondItem(names)


function lastItem(array) {
    console.log((array[array.length -1]));
    }
    lastItem(names);

    This is called method overloading:
function lastItem() {

}
lastItem()




})();
