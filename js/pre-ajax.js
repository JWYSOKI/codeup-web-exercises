"use strict";

// // - add a use strict and a $(document).ready(function() {});
// $(document).ready(function(){
//
//     $("#add-names-btn").click(function(){
//
//      $("#names-list").html("<ul>")
//
//         $(people).each(function(){
//             $("#names-list").append("<li>" + this.name + "</li>");
//         });
//
//      $("#names-list > li").each(function(i){
//
//      });
//
//     //
//     //
//     //         names += "<ul>"
//     //         names += "<li>" + people.names + "</li>"
//     //         names += "<li>" + people.names + "</li>"
//     //         names += "<li>" + people.names + "</li>"
//     //         names += "</ul>"
//     //     })
//     })
//
//     var people = [
//         {
//             name: "Fred",
//             favColor: "red"
//         },
//         {
//             name: "Sally",
//             favColor: "blue"
//         },
//         {
//             name: "Tom",
//             favColor: "yellow"
//         }
//     ];
// });

// ** JUSTIN'S IN-CLASS SOLUTION **
$(document).ready(function() {
    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function buildList(arrObjs) {
        var output = "";
        output += "<ul>";
        arrObjs.forEach(function(person) {
            output += "<li style='color:"+ person.favColor + "'>" + person.name + "</li>";
        });
        output += "</ul>";
        return output;
    }

    $('#add-names-btn').click(function() {
        $('#names-list').html(buildList(people));
    });

});








// - add functionality to the button so that when it is clicked, an unordered list of names from the people array (included below) is added to the inner HTML of the div#names-list. For an extra bonus, make the font color of each list item map to that person's favColor value.