//and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
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

function showMultiplicationTable(number) {
    for (var i = 1; i < 11; i++){
        var total = number*i
    console.log(number + " x " + i + " = " + total)

    }
}

showMultiplicationTable(7)

// For Loops (3.)

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

// 123 is odd
// 80 is even
// 24 is even
// 199 is odd


function randomNumForLoop() {
    for (var i = 0; i <= 10; i++){
        var number = Math.floor(Math.random()*200) + 20;
//In this step, I used times (*) 200 to set the limit at 200. In order to start it at 20, I added 20 to the outside because if the random number generated happens to be 0, it will add 20 and start at 20. Whatever I put in the " + 20" area, is my starting range, otherwise it will start at 0. The " * 200" area is the capped limit. Also, if I did NOT want to hard code "10", i could add a parameter of "num" inside the () of randomeNumForLoop and change "<=10" to <num
        if (number %2===0){
            console.log(number +" is even");
        } else
            console.log(number + " is odd")
    }
}
randomNumForLoop()


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


function forLoop() {
    for (i = 1; i < 11; i++){
     i = i.toString()
     console.log(i.repeat(i))
    }
}

// Create a for loop that uses console.log to create the output shown below.
//
//
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

function countdowm() {
    for(i = 100; i>=5; i-=5){
        console.log(i);
    }

}
countdowm()






