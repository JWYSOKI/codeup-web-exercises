// *****WARM UP CHALLENGES 6/23*****

// 1. Define an array call restaurants that holds 3 restaurant objects. Each object should have the following properties.

// -Name
// -City
// -State Abbrevation
// -Category
// -Stars

var restaurants =[

    {name:"rest1", city:"san antonio", state:"tx", category:"mexican", stars:3},
    {name:"rest2", city:"san antonio", state:"tx", category:"italian", stars:4},
    {name:"rest3", city:"san antonio", state:"tx", category:"french", stars:5}
];


// 2. Write a loop that prints the following statement for each restaurant like the example below to the console log.
// "Torchy's is a Tex-Mex restaurant in Austin, TX. I would give Torcyh's a 4 star rating."

restaurants.forEach(function(restaurant) {
       console.log(restaurant.name + " is a " + restaurant.category + " in " + restaurant.city + restaurant.state + ". " + "I would give " + restaurant.name + " a " + restaurant.stars + " star rating.")
    }
);



// 3. Write another loop that prints each restaurant name and city,state with list item tags around it like the example below

// <li>Torchys - Austin, TX</li>
// <li>Chuy's - San Antonio, TX</li>
// <li>Dirty Dave's - Olympia, WA</li>


restaurants.forEach(function (restaurant) {
    console.log("<li>" + restaurant.name + " - " + restaurant.city + "," + restaurant.state + "</li>")

});


// 4. Let's say the second restaurant in your array deserves a different star rating. Write a line of code that changes the current star rating to either one more or one less. Your choice.


// var currentCategory = restaurants[2].category;
//
// console.log(currentCategory = "indian");
//
// var currentRating = restaurants[1].stars
//
// console.table(restaurants);

var currentRating = restaurants[1].stars += 1;
console.log(currentRating);


// restaurants[1].stars = (parseInt(currentRating) + 1).toString()
//this is called method chaining, when parseInt and .toString are used together
//
// console.log(restaurants);
//
//
// //SECOND, EASIER SOLUTION
//
// restaurants[1].stars = (p
// (restaurants[1].stars) + 1).toString()
// console.log(restaurants);



// 5. Add another restaurant object to your array programatically. In other words, don't go back to the original declaration of the restaurants array, write some code to add a new item into the existing array.


restaurants.push(
    {
        name:"rest4",
        city:"san antonio",
        state:"tx",
        category:"french",
        stars:5
    }
);

console.table(restaurants);


// ********* BONUS *********

// Write a function called showRestaurants that takes in an array as a parameter. When the function is run it should the same statement you made for question 2, for each item. Refer to the example below for desired output.
//
// showRestaurants(restaurants)
//
// "Torchy's is a Tex-Mex restaurant in Austin, TX. I would give Torcyh's a 4 star rating."
//
// "Chuys is a Tex-Mex restaurant in San Antonio, TX. I would give Chuy's a 5 star rating"
//
// "Dirty Dave's is an pizza restaurant in Olympia, WA. I would give Dirty Dave's a 5 star rating"
//
//

function showRestaurants(arr){
    //The name of the array in the parameter could be anything. It is not until it's called that the specific array of "restaurants" is passed in. "Arr" temporarily holds whatever value is passed into the function."
    arr.forEach(function(restaurant) {
            console.log(restaurant.name + " is a " + restaurant.category + " in " + restaurant.city + restaurant.state + ". " + "I would give " + restaurant.name + " a " + restaurant.stars + " star rating.")
        }
    );
};

showRestaurants(restaurants);


// restaurants.forEach(function(restaurant) {
//         console.log(restaurant.name + " is a " + restaurant.category + " in " + restaurant.city + restaurant.state + ". " + "I would give " + restaurant.name + " a " + restaurant.stars + " star rating.")
//     }
// );


//
// HINTS
//
// If you get stuck, use google and be very literal.
//     Example Search Query - "How to add another object to an existing array in javascript"
//
//
//
// GOOD LUCK!