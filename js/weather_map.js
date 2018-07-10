$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "e4e1296cdf5b01fb8814d4c2729dfa05",
    q:     "San Antonio, TX"
}).done(function(data) {
    console.log(data);
});