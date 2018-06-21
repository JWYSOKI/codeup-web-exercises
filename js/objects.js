// (function() {
//     "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    var person = {
        firstName: "Jillian",
        lastName: "Wysoki",
        sayHello: function(){
            var message = "Hello from " + this.firstName + " " + this.lastName + "!";
            return message;
        }
    };
        console.log(person.sayHello());




    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

        person.sayHello = function () {

            return "Hello from " + this.firstName + " " + this.lastName
        };


    console.log(person.sayHello()); // Desired output is "Hello from Jillian Wysoki"

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach( function (discount) {
        if (discount.amount > 200) {
            console.log(discount.name + ' spent $' + discount.amount.toFixed(2) + ".  " + discount.name + ' gets a 12% discount, which is $' + (discount.amount * .12).toFixed(2) + '. Making the new total $ ' + (discount.amount - (discount.amount * .12)).toFixed(2) + '.')

        } else {
            console.log(discount.name + ' spent $' + discount.amount + '. That doesn\'t qualify for the discount.')
        }

    });




var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

shoppers.forEach(function (discount) {
    var discount = 0;
    if (discount.amount > 200) {
        // Which shoppers get a discount?
        // console.log("Gets a discount.")
            var discount = .12;


    //name, amount, discount if any, discounted amount

        console.log(discount.name + ' spent $' + discount.amount + '. ' + discount.name + ' gets a 12% discount which is $' + (discount.amount * .12).toFixed(2) + '. Making the total ' + (discount.amount - (discount.amount * .12)).toFixed(2) + '.')
    }
    else {
        console.log(discount.name + ' spent ' + discount.amount + '.' + 'That does not qualify for the discount.')
    }
});


                discount = shopper.amount * .12


            console.log(shopper.name + " had the total of " + shopper.amount + " and the discount was " + discount + " making the new total " + (shopper.amount - discount))
        });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [

        {title: "The Outsider", author:{firstName: "Stephen", lastname:"King"}},

        {
            title: "Calypso",
            author:{
                firstName: "David", lastname:"Sedaris"}
        },

        {
            title: "The President Is Missing",
            author:{
                firstName: "Bill", lastname:"Clinton"}
        },

        {
            title: "Oh, the Places You'll Go!",
            author:{
                firstName: "Dr.", lastname:"Suess"}
        },

        {
            title: "Milk and honey",
            author:{
                firstName: "Rupi", lastname:"Kaur"}
        }

    ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

 books.forEach(
     function(book, i) {
     //     console.log("Book # " + (books.indexOf(book) + 1));
     //     console.log("Title: " + book.title);
     //     console.log("Author: " + book.author.firstName + " " + book.author.lastname);
     //     console.log("---");

         //////// DANIEL'S SOLUTION /////////

    console.log("Book # " + (i + 1));
    console.log("Title: " + books[i].title);
    console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastname);
    console.log("---");
});


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


   function createBook (title, author){
     var newBook = {}
        newBook.title = title
        newBook.author = author
        return newBook

        // return {number, title, author}
    }

console.log(createBook("Wonder", "R.J.Palacio"));

// })();
