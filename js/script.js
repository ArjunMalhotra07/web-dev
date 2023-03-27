function myFunction() {
    window.location.href = "https://github.com/ArjunMalhotra07";
}
function myFunction1() {
    window.open("https://www.google.com", "_blank");
}
var x = document.getElementById('location_here');

function getLocation() {

    if (navigator.geolocation) {

    console.log("got position");
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log("ShowPosition");
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}