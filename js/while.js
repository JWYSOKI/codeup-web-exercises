"use strict";

// var i = 2;
//     while(i <= 65536){
//         console.log(i);
//             i*=2;
//     }

function iceCream(){
   var amountOfConesToSell = Math.floor(Math.random() * 50) + 50

    do {
       var sold = Math.floor(Math.random() * 5) + 1;
       if (sold > amountOfConesToSell){
           console.log("I cannot sell you " + sold + " because I only have " + amountOfConesToSell + " left." )
           continue;
       }
       console.log(sold + " cones sold")
        amountOfConesToSell -= sold;

    } while (amountOfConesToSell > 0)
        console.log("Yay! I sold them all!")
}
iceCream()

// 5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones
