$(document).ready(function(){
var lat;
var lon;
var fTemp;
var cTemp;
var toggle = true;

$.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
  console.log(lat);
    lon = data2.lon;

var api='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=a5f032592eb4f26f66a849ca522ecb91';
  
$.getJSON(api, function(data){
  var city = data.name;
  var kTemp = data.main.temp;
  var conds = data.weather[0].description;
  var id = data.weather[0].main;
  console.log(id);
  
  fTemp = (kTemp)*(9/5)-459.67;
  cTemp = kTemp - 273;
  
  $("#city").html(city);
  $("#conditions").html(conds);
  $("#temperature").html(Math.round(cTemp) + " Celcius");
  
   
switch(id){
  case "Fog": $(".id i").addClass("wi wi-owm-741"); 
            break;
  case "Strong-wind": $(".id i").addClass("wi wi-owm-957");
            break;
  case "Lightning": $(".id i").addClass("wi wi-owm-210");  
            break;
  case  "Thunderstorm": $(".id i").addClass("wi wi-owm-230"); 
            break;
  case  "Sprinkle": $(".id i").addClass("wi wi-owm-300"); 
            break;  
  case  "Rain": $(".id i").addClass("wi wi-owm-302"); 
            break;
  case  "Rain-mix": $(".id i").addClass("wi wi-owm-310"); 
            break;   
  case  "Showers": $(".id i").addClass("wi wi-owm-313"); 
            break;  
  case  "Storm-showers": $(".id i").addClass("wi wi-owm-531"); 
            break;     
  case  "Snow": $(".id i").addClass("wi wi-owm-600"); 
            break;   
  case  "Sleet": $(".id i").addClass("wi wi-owm-602"); 
            break;  
  case  "Dust": $(".id i").addClass("wi wi-owm-731"); 
            break;  
  case  "Clear": $(".id i").addClass("wi wi-owm-800"); 
            break;  
  case  "Cloudy": $(".id i").addClass("wi wi-owm-804"); 
            break;  
  case  "Hot": $(".id i").addClass("wi wi-owm-904"); 
            break;  
  case  "Windy": $(".id i").addClass("wi wi-owm-905"); 
            break;
  case  "Hail": $(".id i").addClass("wi wi-owm-906"); 
            break;   
  default: $(".id i").addClass("wi wi-owm-804");
  }  
  
  $("#toggle").click(function(){
    
    if (toggle === false) {
      $("#temperature").html(Math.round(fTemp) + " Farenheit");
      toggle = true;
    } else {
      $("#temperature").html(Math.round(cTemp) + " Celcius");
      toggle = false
    }
        
  })
});
});
});