
(function(){

    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    var planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    // **** SPLIT AND JOIN NOTES ****** //

    // Split takes a variable and breaks it up into an array

    //Join takes an array and joins each item into one variable

    //EXAMPLE


    //Delimeter specifies what is in-between each item //


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetStringLineBreak = planetsArray.join ("<br>");
    console.log(planetStringLineBreak);




    var planetsU1 = ['<ul>', '</ul>'];
    var planetsLi = [];

    for (var i = planetsArray.length -1; i >= 0; i--) {
        planetsLi.splice(0, 0, '<li>' + planetsArray[i] + '</li>');
    }

    planetsUl.splice(1, 0, planetsLi.join(''));
    console.log(planetsUl.join(''));

    function phoneNumber(){

    }

    /// ========= Alternate Solution #1 ========//

    var planetsHTML = "<ul></ul>";
    planetsHTML += planetsArray.join("</li><li>");
    planetsHTML += "</li></ul>";

    console.log(planetsHTML);

    document.body.innerHTML = planetsHTML;

    /// Ask Chris about reversed li and ul tags ///

    /// ========= Alternate Solution #2 (With Looping) =======//

})();

// ******** MANIPULATING ARRAYS ******* //

        // To Manipulate THE BEGINNING of an Array //
        //======================================== //

            // UNSHIFT adds an item (or items) to THE BEGINNING of an array, and returns new length of it

            // SHIFT removes FIRST ITEM (or items) from THE BEGINNING of an array (and returns the element)



        // To Manipulate *** THE END *** of an Array //
        //========================================== //

            // PUSH adds an item (or items) to THE END of an array and returns number of items in it

            // POP removes last element from array (and returns the element)