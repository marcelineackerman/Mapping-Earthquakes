// Add console.log to check to see if our code is working

console.log("working");


// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Grabbing our GeoJSON data.

d3.json(airportData).then(function(data) {
    console.log(data);
    
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map);
});