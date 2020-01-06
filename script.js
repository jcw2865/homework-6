$(document).ready(function () {

    // Create a function to display weather for requested city
    function displaySearchWeather() {
        var city = $("#inputBox").value;
        var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ed96cd9f31b609d4c86583b47ca836d6";

        // Create an AJAX call to pull data for requested city
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })

    }

    // Add functionality to button click
    // $(document).on("click", "#searchButton", displaySearchWeather);
    $("#searchButton").on("click", displaySearchWeather);


});