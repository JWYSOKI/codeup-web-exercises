// A function definition is writing the word function and the name of the function next to it.

// function nameOfFunction


// The parentheses after the function name are parameters that the function will take in, in other words, a piece of data that the function is going to do something to.

function nameOfFunction (// This is where function parameters go)

// You can also have functions with no parameters, but you still need the empty () after the name of the function.

// The body of the function is always wrapped in { }

// The return statement is what the function is giving back to you after it is executed. In other words, when you have the function double(n) that returns n*2 - The return statement is giving you whatever number you passed in doubled.

// The function below will take in a number as the parameter "n", and return "n" doubled.

function double(n){
    return n*2
}

// Since the function is not actually printing anything but just returning it, in order to see it in your console you will need to write a console.log statement that takes the function as a parameter, like below.

// This should print 4 to the console
console.log(double(2))

// This should print 30 to the console
console.log(double(15))
