// 1. Define an array call restaurants that holds 3 restaurant objects. Each object should have the following properties.
//
// -Name
// -City
// -State Abbrevation
// -Category
// -Stars
//
// *** This is a defined array ***

var restaurants = [

{name: "Green", city: "San_Antonio", state: "TX", category: "Vegetarian", stars: "5"},

{name: "Tierra", city: "San_Antonio", state: "TX", category: "Mexican", stars: "4"},

{name: "Paesanos", city: "San_Antonio", state: "TX", category: "Italian", stars: "5"}
];

console.log(restaurants);


// 2. Write a loop that prints the following statement for each restaurant like the example below to the console log.

// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }

restaurants.forEach(
    function(restaurant) {
        // console.log(restaurant);

console.log (this.restaurant + " is a Tex-Mex restaurant in " + this.city + this.state + " and I would give " + restaurant + " a " + this.stars + " stars.")

});



// "Torchy's is a Tex-Mex restaurant in Austin, TX. I would give Torcyh's a 4 star rating."




// 3. Write another loop that prints each restaurant name and city,state with list item tags around it like the example below


// <li>Torchys - Austin, TX</li>
// <li>Chuy's - San Antonio, TX</li>
// <li>Dirty Dave's - Olympia, WA</li>




// 4. Let's say second first restaurant in your array deserves a different star rating. Write a line of code that changes the current star rating to either one more or one less. Your choice.







// 5. Add another restaurant object to your array programatically. In other words, don't go back to the original declaration of the restaurants array, write some code to add a new item into the existing array.


// push




// ********* BONUS *********


// Write a function called showRestaurants that takes in an array as a parameter. When the function is run it should the same statement you made for question 2, for each item. Refer to the example below for desired output.


// showRestaurants(restaurants)


// "Torchy's is a Tex-Mex restaurant in Austin, TX. I would give Torcyh's a 4 star rating."


// "Chuys is a Tex-Mex restaurant in San Antonio, TX. I would give Chuy's a 5 star rating"

// "Dirty Dave's is an pizza restaurant in Olympia, WA. I would give Dirty Dave's a 5 star rating"

// HINTS

// If you get stuck, use google and be very literal.
//     Example Search Query - "How to add another object to an existing array in javascript"


// GOOD LUCK!

