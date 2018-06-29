"use strict";

// window.onload = function(){
//
// document.getElementById("playButton").addEventListener("click", function(){
//     var input = document.getElementById("playInput").value;
//
//     console.log(input);
//
//     document.getElementById("playOutput").innerText = input;
// })
// };

$(function(){
    $("#playButton").click(function(){
        $("playOutput").text($("#playOutput").val());
        $("h1").toggle(1000);

    })

})