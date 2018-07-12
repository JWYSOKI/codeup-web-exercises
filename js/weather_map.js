// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: "e4e1296cdf5b01fb8814d4c2729dfa05",
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });


// ===========> Justin's warm up exercises <=============

//console.log the humidity of the 2nd day
// $(document).ready(function() {
//     "use strict";
//     var location = 4726206;
//     var jqXhr = $.get('http://api.openweathermap.org/data/2.5/forecast', {
//         APPID: '7f8e3aa0aad113510e0c1eaafd1c17b8',
//         id: location,
//         units: 'imperial'
//     });
//     jqXhr.done(function(data) {
//         console.log(data.list[8].main.humidity);
//     });
// });
//
//
// // console.log the temperature of the 3rd day in Kelvin (default)
// $(document).ready(function() {
//     "use strict";
//     var location = 4726206;
//     var jqXhr = $.get('http://api.openweathermap.org/data/2.5/forecast', {
//         APPID: '7f8e3aa0aad113510e0c1eaafd1c17b8',
//         id: location
//     });
//     jqXhr.done(function(data) {
//         console.log(data.list[16].main.temp);
//     });
// });
//
//
//
// // console.log the temperature of the 3rd day in Fahrenheit
// $(document).ready(function() {
//     "use strict";
//     var location = 4726206;
//     var jqXhr = $.get('http://api.openweathermap.org/data/2.5/forecast', {
//         APPID: '7f8e3aa0aad113510e0c1eaafd1c17b8',
//         id: location,
//         units: 'imperial'
//     });
//     jqXhr.done(function(data) {
//         console.log(data.list[16].main.temp);
//     });
// });
//
//
//
// // console.log the temperature of the 3rd day in celsius
// $(document).ready(function() {
//     "use strict";
//     var location = 4726206;
//     var jqXhr = $.get('http://api.openweathermap.org/data/2.5/forecast', {
//         APPID: '7f8e3aa0aad113510e0c1eaafd1c17b8',
//         id: location,
//         units: 'metric'
//     });
//     jqXhr.done(function(data) {
//         console.log(data.list[16].main.temp);
//     });
// });
//
//
//
//
// // console.log all types of information you will ultimately display for a single day in the exercise
// $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
//     APPID: "7f8e3aa0aad113510e0c1eaafd1c17b8",
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
// });
//
// // console.log the humidity of all the days (maybe use .forEach?)
//
// $(document).ready(function() {
//     "use strict";
//     var location = 4726206;
//     var weatherMapCall = $.get('http://api.openweathermap.org/data/2.5/forecast', {
//         APPID: '7f8e3aa0aad113510e0c1eaafd1c17b8',
//         id: location,
//         units: 'imperial'
//     });
//    weatherMapCall.done(function (data) {
//        for(var i=0; i<40; i+=8){
//            console.log(data.list[i].main.humidity);
//        }
//    })
// });

// console.log all type of information you will ultimately display for all days in the 3-day forecast divs


$(document).ready(function(){
    "use strict";
    var location = 4726206;
    var weatherMapCall = $.get('http://api.openweathermap.org/data/2.5/forecast', {
        APPID: '7f8e3aa0aad113510e0c1eaafd1c17b8',
        id: location,
        units: 'imperial'
    });
    weatherMapCall.done(function(data){
        for(var i=0; i<24; i+=8){
            console.log(data.list[i].main);
        }
    });
      weatherMapCall.done(function(data) {
        console.log(data.list[8].main.humidity);

    });

    weatherMapCall.done(function(data){
        for(var i=0; i<40; i+=8){
            var weather = data.list[i].weather[0];
            var wind = data.list[i].wind;
            console.log(weather);
            console.log(wind.speed);
        }
    })

});

// main
// humidity
// wind
// pressure
































