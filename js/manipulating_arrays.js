
// Wed 6/20/18 - Justin's array review

/*
    for looping
    forEach looping
    pus/pop/shift/unshift
    length
    indexOf
 */
    var pies = [
        "apple",
        "cherry",
        "key lime",
        "huckleberry",
        "rhubarb"
    ];

    for (var i = 0; i <pies.length; i++) {
        console.log(pies[i]);
    }

        //things inside forEach function parenthesis can be called any name, but convention is to use the singular of the plural original name of the array. In this case, the element is names 'pie' //

    pies.forEach(function (pie, index, array) {

        console.log(pie);

        pies.shift();
        console.log(pies);

        pies.pop();
        console.log(pies);

        pies.push("Chocolate");
        console.log(pies);

        pies.forEach(function (pie, index) {
            console.log(pie, index);
        })
    });
    // what is Git tagging? (a snapshot of some sort; ask Chris)

// ========================== SLICING

// Returns A

/ *

// ** create a function that takes in an array of pies baked and console.logs the 3 most recently baked pies ** //

function lastThreePiesBaked(arr) {
    return arr.slice(arr.length - 3);
}
// This calls the function //
console.log(lastThreePiesBaked(pies));

// ----------------------------------- //

//**** IMPORTANT!!! **** //
// Once you sort an array, you change the original order of the array //

// End of Slicing notes

// ======================== SPLIT / JOIN


// splitting string into an array

var names = "Bob Sally Mary";

//This creates an array from a string //
var namesArr = names.split(" ");

// This creates a string from an array //

var namesString = namesArr.join("\n");

function cleanPhoneNumbers(phoneNums) {
    var phoneNumsArr = phoneNums.split("\n");
    var cleanNumsArr;

    // console.log(phoneNum);
    phoneNumsArr.forEach(function(phoneNum){

        var formattedNumber = phoneNum.split("-").join("");
        cleanNumsArr.push(formattedNumber);
    });
return cleanNumsArr;
}

var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);

for (var i = 0; i < cleanNumsArr.length; i+=1){
    console.log(cleanNumsArr[i]);
}