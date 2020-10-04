<script>
var location = document.getElementById("position");
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
    window.alert("Good job! By walking or biking, you're not producing carbon emmissions! Keep up the good work!");
  }
  else if (type == 2) {
    var g_emmisions = time * 150;
    window.alert("Try to reduce how much you use your car! By driving your car that distance, you have output approximately", g_emmisions, "grams of CO2");
  }
}

function calculate {
  var time = document.getElementById("minutes").value;
  console.log(time);
  var method = document.getElementById("transport").value;
  console.log(method);
  calc_emissions(time, method);
}
</script> 