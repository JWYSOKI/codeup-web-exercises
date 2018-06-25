"use strict";

document.getElementById("playButton")
    .addEventListener("click", function(){


var input = document.getElementById("playInput").value;
document.getElementById("playOutput").innerText=input;

        console.log("Play!");
        console.log(input);
});

