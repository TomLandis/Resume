//steal my API key ... and I will find you!

var key4 = "945943f084104cd1b7b03629171506";
var theUrl = "https://api.apixu.com/v1/current.json?key=" + key4 + "&q=";
var city, region, country, lat, lon, temp_c, temp_f, description, loco, image, humidity, vis, windDir, windSpeed, feelsLikeF, feelsLikeC;
var londonLat = 51.509865;
var londonLon = -0.118092;
var tokyoLat = 35.652832;
var tokyoLon = 139.839478;
var newYorkLat = 40.730610;
var newYorkLon =  -73.935242;

$(document).ready(function() {
  
      //F and C button
    var cel = true; 
    var tempF = 0;
   $("#switcher").on("click", function(){
          
    if (cel === true) {
    $("#switcher").html("Show in Celsius");
     
       $("#temp").html(temp_f + '°' + 'F');
      cel = false;
      }else{
      $("#switcher").html("Show in Fahrenheit");
      $("#temp").html(temp_c + '°' + 'C');
      cel = true;
    }
    
   }); 


  //location, location, location
navigator.geolocation.getCurrentPosition(function(position) {
console.log(position);
  lat = position.coords.latitude;
  lon =  position.coords.longitude;
});
  


$.getJSON("https://ipinfo.io", function(data) {
 

  


  $.getJSON(theUrl + lat + "," + lon + "&appid=66b18b2ee6cb8577e268c98efdecf6e5", function(data) {
  //console.log(data);
    temp_f = data.current.temp_f;
    temp_c = data.current.temp_c;
    description = data.current.condition.text;
    image = data.current.condition.icon;
    humidity = data.current.humidity;
    vis = data.current.vis_km;
    windDir = data.current.wind_dir;
    windSpeed = data.current.wind_kph;
    feelsLikeF = data.current.feelslike_f;
    feelsLikeC = data.current.feelslike_c;
    city = data.location.name;
    region = data.location.region;
    country = data.location.country;
    
    $("#city").html( city + ' - ' + region + ' - ' +  country + " is"); 
    $("#temp").html(temp_c + '°' + 'C');
    $("#conditions").html(description);
    $("#weatherPic").html('<img src=' + image + ' id="con">');
    $("#details").html('<img src=' + image + '><h3> Feels Like ' + feelsLikeC + '° C / ' + feelsLikeF + "° F <br> " + humidity + "% Humidity with " + vis + "km of visibility <br> " + windSpeed + " Kph wind from the " + windDir + "<h3>");
    

  });

    });
  
  
$('#London').on('click', function(event) {
     $.getJSON(theUrl + londonLat + "," + londonLon + "&appid=66b18b2ee6cb8577e268c98efdecf6e5", function(data) {
  //console.log(data);
    temp_f = data.current.temp_f;
    temp_c = data.current.temp_c;
    description = data.current.condition.text;
    image = data.current.condition.icon;
    humidity = data.current.humidity;
    vis = data.current.vis_km;
    windDir = data.current.wind_dir;
    windSpeed = data.current.wind_kph;
    feelsLikeF = data.current.feelslike_f;
    feelsLikeC = data.current.feelslike_c;
    city = data.location.name;
    region = data.location.region;
    country = data.location.country;
    
    $("#city").html( city + ' - ' + region + ' - ' +  country + " is"); 
    $("#temp").html(temp_c + '°' + 'C');
    $("#conditions").html(description);
    $("#weatherPic").html('<img src=' + image + ' id="con">');
    $("#details").html('<img src=' + image + '><h3> Feels Like ' + feelsLikeC + '° C / ' + feelsLikeF + "° F <br> " + humidity + "% Humidity with " + vis + "km of visibility <br> " + windSpeed + " Kph wind from the " + windDir + "<h3>");
    
 
  });

  });
  
  // Tokyo button
  $('#Tokyo').on('click', function(event) {
     $.getJSON(theUrl + tokyoLat + "," + tokyoLon + "&appid=66b18b2ee6cb8577e268c98efdecf6e5", function(data) {
  //console.log(data);
    temp_f = data.current.temp_f;
    temp_c = data.current.temp_c;
    description = data.current.condition.text;
    image = data.current.condition.icon;
    humidity = data.current.humidity;
    vis = data.current.vis_km;
    windDir = data.current.wind_dir;
    windSpeed = data.current.wind_kph;
    feelsLikeF = data.current.feelslike_f;
    feelsLikeC = data.current.feelslike_c;
    city = data.location.name;
    region = data.location.region;
    country = data.location.country;
    
    $("#city").html( city + ' - ' + region + ' - ' +  country + " is"); 
    $("#temp").html(temp_c + '°' + 'C');
    $("#conditions").html(description);
    $("#weatherPic").html('<img src=' + image + ' id="con">');
    $("#details").html('<img src=' + image + '><h3> Feels Like ' + feelsLikeC + '° C / ' + feelsLikeF + "° F <br> " + humidity + "% Humidity with " + vis + "km of visibility <br> " + windSpeed + " Kph wind from the " + windDir + "<h3>");
    
 
  });

  });
   $('#NewYork').on('click', function(event) {
     $.getJSON(theUrl + newYorkLat + "," + newYorkLon + "&appid=66b18b2ee6cb8577e268c98efdecf6e5", function(data) {
  //console.log(data);
    temp_f = data.current.temp_f;
    temp_c = data.current.temp_c;
    description = data.current.condition.text;
    image = data.current.condition.icon;
    humidity = data.current.humidity;
    vis = data.current.vis_km;
    windDir = data.current.wind_dir;
    windSpeed = data.current.wind_kph;
    feelsLikeF = data.current.feelslike_f;
    feelsLikeC = data.current.feelslike_c;
    city = data.location.name;
    region = data.location.region;
    country = data.location.country;
    
    $("#city").html( city + ' - ' + region + ' - ' +  country + " is"); 
    $("#temp").html(temp_c + '°' + 'C');
    $("#conditions").html(description);
    $("#weatherPic").html('<img src=' + image + ' id="con">');
    $("#details").html('<img src=' + image + '><h3> Feels Like ' + feelsLikeC + '° C / ' + feelsLikeF + "° F <br> " + humidity + "% Humidity with " + vis + "km of visibility <br> " + windSpeed + " Kph wind from the " + windDir + "<h3>");
    
 
  });

  });
   $('#LocalWeather').on('click', function(event) {
     $.getJSON(theUrl + lat + "," + lon + "&appid=66b18b2ee6cb8577e268c98efdecf6e5", function(data) {
  //console.log(data);
    temp_f = data.current.temp_f;
    temp_c = data.current.temp_c;
    description = data.current.condition.text;
    image = data.current.condition.icon;
    humidity = data.current.humidity;
    vis = data.current.vis_km;
    windDir = data.current.wind_dir;
    windSpeed = data.current.wind_kph;
    feelsLikeF = data.current.feelslike_f;
    feelsLikeC = data.current.feelslike_c;
    city = data.location.name;
    region = data.location.region;
    country = data.location.country;
    
    $("#city").html( city + ' - ' + region + ' - ' +  country + " is"); 
    $("#temp").html(temp_c + '°' + 'C');
    $("#conditions").html(description);
    $("#weatherPic").html('<img src=' + image + ' id="con">');
    $("#details").html('<img src=' + image + '><h3> Feels Like ' + feelsLikeC + '° C / ' + feelsLikeF + "° F <br> " + humidity + "% Humidity with " + vis + "km of visibility <br> " + windSpeed + " Kph wind from the " + windDir + "<h3>");
    
 
  });

  });
});
