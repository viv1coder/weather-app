document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the weather data from localStorage
    const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  
    if (weatherData) {
      // If the data exists, display it in the appropriate elements
      const cityname = document.getElementById("cityname");
      const citytemp = document.getElementById("temp");
      const feelslike = document.getElementById("feelslike");
      const pressure = document.getElementById("pressure");
      const windspeed = document.getElementById("windspeed");
      const humidity = document.getElementById("humidity");
      const visibility = document.getElementById("visibility");
      const date = new Date();
      const displaydate = document.querySelector("#date")
  
      cityname.innerText = `${weatherData.name}`;
      displaydate.innerText = date.toLocaleDateString();
      citytemp.innerText = `${Math.floor(weatherData.main.temp)}°`;
      feelslike.innerText = `Weather here feels like: ${weatherData.main.feels_like} °C`;
      pressure.innerText = `Pressure here is something: ${weatherData.main.pressure} hPa`;
      windspeed.innerText = `${weatherData.wind.speed} km/h`;
      humidity.innerText = `${weatherData.main.humidity}%`;
      visibility.innerText = `${weatherData.visibility / 1000} km`;
    } else {
      // If no data is available, show an error
      const errorr = document.querySelector(".error");
      errorr.style.display = "flex";
      errorr.textContent = "No weather data available.";
      date.style.visibility = "none";
    }


  });

  const nextlocation = document.getElementById("nextlocation");

nextlocation.addEventListener("click", function() {
  window.location.href = "weather.html";
});