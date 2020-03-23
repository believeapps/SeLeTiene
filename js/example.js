var latitude;
var longitude;
var marker;
var mymap;
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

mymap = L.map('map').setView([4.611206, -74.071202], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3NjYXItYXJpYXMiLCJhIjoiY2s4M3oxdWZxMGJhMzNnbzZ6NGlzcDB1YyJ9.oSMlqaLPIc7-Vr0rH6cJeg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NjYXItYXJpYXMiLCJhIjoiY2s4M3oxdWZxMGJhMzNnbzZ6NGlzcDB1YyJ9.oSMlqaLPIc7-Vr0rH6cJeg'
}).addTo(mymap);

function success(pos) {
    var crd = pos.coords;
    
    latitude = crd.latitude;
    longitude = crd.longitude;
    marker = L.marker([latitude, longitude]).addTo(mymap);
    mymap.setView([latitude, longitude], 16);
    marker.bindPopup("<b>Tienda de Mots</b><br><b>Domicilios: </b>Si<br><a href='https://google.com'>Sitio Web</a>").openPopup();
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  

