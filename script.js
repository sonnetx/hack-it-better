//var location = document.getElementById("position");
function GPScoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(dropCoords);
  } 
  else {
    location.innerHTML = "Geolocation is not supported, sorry!";
  }
}

function dropCoords(position) {
  location.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude + "<br> Accuracy: " + position.coords.accuracy;

}

function calc_emissions(time, type) {
  if (type == 3) {
    window.alert("Good job! By walking or biking, you're not producing carbon emmissions or any greenhouse gas! Keep up the good work!");
  }
  else if (type == 1) {
    var g_emmisions = time * 150;
    window.alert("Try to reduce how much you use your car! By driving your car that distance, you have output approximately " + g_emmisions + " grams of CO2");
  }
  else if (type == 2) {
    var g_emmisions = time * 75;
    window.alert("Good job on not using cars, you're helping out the planet a lot! If possible, try to start walking and biking as greener alternatives, keep up the good work! By riding the bus that distance, you've output about " + g_emmisions + " grams of CO2")
  }
  else {
    window.alert("Double check that you're looking at the key provided for the methods of transport, the value you entered is not recognized.")
  }
}

function calculate() {
  var time = document.getElementById("minutes").value;
  //window.alert(time);
  var method = document.getElementById("transport").value;
  //window.alert(method);
  calc_emissions(time, method);
  //window.alert('hi')
}

function displaySubmission() {
  window.alert("Thank you for taking time out of your day to contact us, we will get in touch with you as soon as possible.");
}