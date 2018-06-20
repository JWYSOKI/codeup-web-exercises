// Make a movie object called film that has the following properties with the following datatypes
//
// title: String
// director: String
// yearReleased: Number
// genres: Array of Strings
// length: String
//
//
// example
//
// var movie = {
//     title:"The Shining",
//     director:"Stephen King",
//     yearReleased:1987,
//     genres:["horror", "thriller", "drama"],
//     length:"2:35"
// }
//
// console.log "The shining was directed by Stephen King and released in 1987"


var movie = {
    title:"The Shining",
    director: "Stephen King",
    yearReleased: 1987,
    genres: ["horror", "thriller", "drama"],
    length: "2:35",
    sayThis: function(){
        return "The movie " + this.title + " was directed by " + this.director + " and released in the year " + this.yearReleased + " and it is " + this.length + " hours long " + " and it is in the genres of " + this.genres}
}

console.log(movie.sayThis());

// Extra Practice //

// Use a for each loop to print out each genre of that movie

//================= NOTES FROM DANIEL'S LECTURE ==================== //

// JSON - JavaScript Object Notation

// KEY:VALUE PAIRS
// "function" can be a value in an object, but because it;s special and does something, it is called a METHOD (versus a property)

// EXAMPLE //

var hat = "trilby";

// Common mistake is to call a trilby a fedoras, but it is not. It is a tribly. //

hat.length;

console.log(hat.length);

console.log(teacher.name);

teacher.teach();


var name = "Daniel";
// The word 'name' is a variable identifier //

