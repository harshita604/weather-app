const apikey="449ea6a7271020ea442ad2efdcf80965";
const apiurl=" https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weathericon= document.querySelector(".weather-icon");

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})

async function checkweather(city)
 {
 const response= await fetch(apiurl+ city+ `&appid=${apikey}`);

 if(response.status==404)
 {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";


 }              
            
else
 {
    var data= await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML= data.wind.speed + "km/hr";


            
        if(data.weather[0].main=="Clouds")
        {
            weathericon.src="images/cloudy.png";
        }

        else if(data.weather[0].main=="Clear")
        {
            weathericon.src="images/clear.png";
        }

        else if(data.weather[0].main=="Drizzle")
        {
            weathericon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weathericon.src="images/raining.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weathericon.src="images/raining.png";
        }

        else if(data.weather[0].main=="Mist")
        {
            weathericon.src="images/mist.png";
        }

        else
        {
            weathericon.src="images/clear.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

        }

    
        
        



   }
